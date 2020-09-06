import { CollectionView } from "./CollectionView";
import { User, UserProps } from "../models/User";
import { UserShow } from "./UserShow";

export class UserList extends CollectionView<User, UserProps> {
  /**
   * Create a new view using a model and render that to an item parent
   * @param {User} model - Model used to create view
   * @param {Element} itemParent - Parent element to render view to
   * @memberof UserList
   */
  renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();
  }
}
