type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};

  /**
   * Add a callback function to an event
   * @param {string} eventName - Event name to update
   * @param {Callback} callback - Callback function to add to event
   * @memberof Eventing
   */
  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  /**
   * Trigger all callback functions for an event
   * @param {string} eventName - Event to trigger callbacks
   * @returns {void}
   * @memberof Eventing
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
