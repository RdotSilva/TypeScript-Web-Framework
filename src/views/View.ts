import { User } from "../models/User";

export abstract class View {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }
}
