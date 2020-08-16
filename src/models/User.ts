/**
 * Interface listing the properties that a user should have
 * @interface UserProps
 */
interface UserProps {
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
}
