import { AxiosPromise, AxiosResponse } from "axios";

interface ModelAttributes<T> {
  set(update: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.get;

  /**
   * Make an update to a model
   * @param {T} update - The update to make
   * @memberof Model
   */
  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger("change");
  }

  /**
   * Fetch a model
   * @memberof Model
   */
  fetch(): void {
    const id = this.attributes.get("id");

    if (typeof id !== "number") {
      throw new Error("Cannot fetch without an id");
    }

    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }

  /**
   * Save a model
   * @memberof Model
   */
  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.trigger("save");
      });
  }
}
