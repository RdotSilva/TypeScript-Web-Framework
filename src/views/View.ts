import { Model } from "../models/Model";

interface ModelForView {
  on(eventName: string, callback: () => void): void;
}

export abstract class View<T extends Model<K>, K> {
  regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  abstract template(): string;

  regionsMap(): { [key: string]: string } {
    return {};
  }

  eventsMap(): { [key: string]: () => void } {
    return {};
  }

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
   * Map a region to a specific element
   * @param {DocumentFragment} fragment - Fragment to search
   * @memberof View
   */
  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);

      if (element) {
        this.regions[key] = element;
      }
    }
  }

  onRender(): void {}

  /**
   * Create an HTML element out of a template and append it to the parent element
   * @memberof View
   */
  render(): void {
    this.parent.innerHTML = "";

    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);

    this.onRender();

    this.parent.append(templateElement.content);
  }
}
