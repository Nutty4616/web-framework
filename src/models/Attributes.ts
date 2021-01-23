export class Attributes<T> {
  constructor(private data: T) {}

  // Getter
  get = <K extends keyof T>(key: K): T[K] => {
    // Gets a single piece of info about this user (name, age)
    return this.data[key];
  }

  //Setter method to update user data
  set(update: T):void {
    // take all the properties and values of update and override all of them to this.data
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}


