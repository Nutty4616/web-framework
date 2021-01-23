/* GOAL: Create a class which handles all the events that are tied to a user  */


// defining callback type allias
type Callback = () => void;

export class Eventing {
   /* --------- Eventing System ----------- */
   events: { [key: string]: Callback[] } = {};

   /* Eventing System => on() Registers an event handler with this object, so other parts of the app know when something changes
      trigger() Triggers an event to tell other parts of the app that something has changed
   */
  on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger = (eventName: string): void =>{
    // check if it has some registered events assigned
    const handlers = this.events[eventName];

    if(!handlers || handlers.length === 0){
      return;
    }

    handlers.forEach(callback => {
      callback();
    });
  }
}