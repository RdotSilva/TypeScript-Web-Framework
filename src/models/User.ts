import axios, { AxiosResponse } from "axios";

/**
 * Interface listing the properties that a user should have
 * @interface UserProps
 */
interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

/**
 * Class that represents a User
 * @export
 * @class User
 */
export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  /**
   * Get data related to User
   * @param {string} propName - The property name you want to retrieve
   * @returns {(number | string)}
   * @memberof User
   */
  get(propName: string): number | string {
    return this.data[propName];
  }

  /**
   * Update User data
   * @param {UserProps} update - The update you want to make
   * @memberof User
   */
  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  /**
   * Add a Callback function to an event
   * @param {string} eventName - Event name to update
   * @param {Callback} callback - Callback function to add to event
   * @memberof User
   */
  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  /**
   * Trigger all callbacks for an event
   * @param {string} eventName - Event to trigger callbacks
   * @returns {void}
   * @memberof User
   */
  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    });
  }

  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get("id")}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    const id = this.get("id");

    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post("http://localhost:3000/users/", this.data);
    }
  }
}
