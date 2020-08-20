import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

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
}
