import { User, UserProps } from '../models/User';
import { View } from '../views/View';

type method = () => void;

export class UserForm extends View<User, UserProps> {
  eventsMap():{ [key: string]: method } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-model': this.onSaveClick,
    };
  }

  onSaveClick = (): void => {
    this.model.save();
  }

   onSetAgeClick = (): void => {
    this.model.setRandomAge();
  }

   onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');

    if(input) {
      const name = input.value;

      this.model.set({ name });
    }  
  }

  template(): string{
    return `
    <div>
        <h3>User Detail</h3>
        <div>User Name: ${this.model.get('name')}</div>
        <div>User Age: ${this.model.get('age')}</div>
      </div>

      <div>
        <input id="attrs" placeholder="${this.model.get('name')}" />  
        <button class="set-name btn btn-purple mr-3">Change Name</button>
        <button class="set-age btn btn-purple mr-3">Set Random Age</button>
        <button class="save-model btn btn-purple mr-3">Save User</button>
      </div>
    `;
  } 
}