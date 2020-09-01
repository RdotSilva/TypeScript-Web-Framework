import { User } from "../models/User";

export abstract class View {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  abstract eventsMap(): { [key: string]: () => void };
  abstract template(): string;

  /**
   * Bind model to on change event handler to re-render any time there is a change
   * @memberof View
   */
  bindModel(): void {
    this.model.on("change", () => {
      this.render();
    });
  }

  /**
   * Bind events to a particular HTML fragment
   * @param {DocumentFragment} fragment - HTML fragment to bind events to
   * @memberof View
   */
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
   * @memberof View
   */
  render(): void {
    this.parent.innerHTML = "";

    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
