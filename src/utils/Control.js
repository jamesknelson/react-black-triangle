import Rx from "rx";
import {entries} from "./functions";


export default function control(builder, dispatcher, Replayables) {
  const Observables = {};
  const Actions = {};

  const functions = builder(Actions, Replayables);

  for (let [name, fn] of entries(functions)) {
    const subject = new Rx.Subject();

    function trigger(value) { subject.onNext(value); }

    Observables[name] = subject.asObservable();
    Actions[name] = dispatcher.getAction(fn.bind(trigger));
  }

  Object.freeze(Actions);
  Object.freeze(Observables);

  return {Actions, Observables};
}
