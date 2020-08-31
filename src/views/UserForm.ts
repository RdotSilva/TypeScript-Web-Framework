import { User } from "../models/User";

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  /**
   * Bind model to on change event handler to re-render any time there is a change
   * @memberof UserForm
   */
  bindModel(): void {
    this.model.on("change", () => {
      this.render();
    });
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAgeClick,
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  /**
   * Hard coded template used for testing
   * @returns {string}
   * @memberof UserForm
   */
  template(): string {
    return `
     <div> 
      <h1>User Form</h1>
      <div>User name: ${this.model.get("name")}</div>
      <div>User name: ${this.model.get("age")}</div>
      <input />
      <button>Click Me</button>
      <button class="set-age">Set random age</button>
     </div>`;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  /**
   * Create an HTML element out of a template and append it to the parent element
   * @memberof UserForm
   */
  render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
