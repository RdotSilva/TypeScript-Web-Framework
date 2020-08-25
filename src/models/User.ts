import { Model } from "./Model";

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
export class User extends Model<UserProps> {}
