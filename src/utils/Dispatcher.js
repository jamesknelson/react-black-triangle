import invariant from "invariant";


export default class Dispatcher {
  constructor() {
    this.running = false;
  }

  // Return an action which can only be run while no other functions on this
  // dispatcher are currently being run
  getAction(fn) {
    return (...args) => this.run(fn.bind(null, ...args));
  }

  run(fn) {
    invariant(!this.running, "Only one action can be run in progress per dispatcher.");
    this.running = true;
    fn();
    this.running = false;
  }
}
