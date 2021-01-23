/* 
  TODO: Build a Class User as Mega Class with tons of Methods.
  TODO: refactor User to use composition.
  TODO: refactor User to be a reusable class that can represents any piece of data, not just a User.
*/

import { Model } from './Model';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';


export interface UserProps {
  // Onject to store User information about a particaular user (id, name, age)
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http//:localhost:3000/users';

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );
  }
}