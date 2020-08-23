export class Attributes<T> {
  constructor(private data: T) {}

  // Type of K can only ever be one of the keys of T
  // Return the value of the key K
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}
