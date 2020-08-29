export class UserForm {
  constructor(public parent: Element) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:button": this.onButtonClick,
    };
  }

  onButtonClick(): void {
    console.log("Button Clicked");
  }

  /**
   * Hard coded template used for testing
   * @returns {string}
   * @memberof UserForm
   */
  template(): string {
    return `
     <div> 
      <h1>User Form</h1>
      <input />
     </div>`;
  }

  /**
   * Create an HTML element out of a template and append it to the parent element
   * @memberof UserForm
   */
  render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.parent.append(templateElement.content);
  }
}
