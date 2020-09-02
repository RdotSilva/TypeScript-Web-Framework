import { View } from "./View";
import { User, UserProps } from "../models/User";

export class UserForm extends View<User, UserProps> {
  /**
   * Create an event map
   * @returns {{ [key: string]: () => void }}
   * @memberof UserForm
   */
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
    };
  }

  /**
   * Sets a name based user input field
   * @memberof UserForm
   */
  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input");

    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  /**
   * Set a random age for the user
   * @memberof UserForm
   */
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
      <button class="set-name">Change Name</button>
      <button class="set-age">Set random age</button>
     </div>`;
  }
}
