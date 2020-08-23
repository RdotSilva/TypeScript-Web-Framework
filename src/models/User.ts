import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { Attributes } from "./Attributes";

/**
 * Interface listing the properties that a user should have
 * @interface UserProps
 */
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

/**
 * Class that represents a User
 * @export
 * @class User
 */
export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attributes: Attributes<UserProps>;

  /**
   * Creates an instance of User.
   * @param {UserProps} attrs - The attributes used to create new User
   * @memberof User
   */
  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }

  /**
   * on method passthrough
   * @readonly
   * @memberof User
   */
  get on() {
    return this.events.on;
  }

  /**
   * trigger method passthrough
   * @readonly
   * @memberof User
   */
  get trigger() {
    return this.events.trigger;
  }

  /**
   * get method passthrough
   * @readonly
   * @memberof User
   */
  get get() {
    return this.attributes.get;
  }
}
