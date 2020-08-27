import { User } from "./User";
import { Eventing } from "./Eventing";
export class Collection {
  models: User[] = [];
  events: Eventing = new Eventing();
}
