import control from "./control";
import Dispatcher from "./Dispatcher";
import invariant from "invariant";
import model from "./model";
import reducer from "./reducer";
import {entries} from "./functions";


export function initialize({controls = {}, models = {}, reducers = {}, actors = {}}) {
  const dispatcher = new Dispatcher;

  const Actions = {};
  const Observables = {};
  const Replayables = {};

  // Setup Controls
  // TODO: make a util helper to do this
  for (let [name, builder] of entries(controls)) {
    const out = control(builder, dispatcher, Replayables);

    Actions[name] = out.Actions;
    Observables[name] = out.Observables;
  };

  Object.freeze(Actions);
  Object.freeze(Observables);

  // Setup Models
  for (let [name, builder] of entries(models)) {
    Replayables[name] = model(builder, Observables);
  }

  // Setup Reducers
  const setupFns = [];
  for (let [name, builder] of entries(reducers)) {
    invariant(!Replayables[name], `Models and Reducers cannot share the same name [${name}]`);
    const {replayable, setup} = reducer(builder, Replayables);
    setupFns.push(setup);
    Replayables[name] = replayable;
  }

  Object.freeze(Replayables);

  setupFns.forEach(fn => fn());


  // Setup Actors
  for (let [name, builder] of entries(actors)) {
    builder(Actions, Replayables);
  }

  // Initialize
  for (let [name, ControlActions] of entries(Actions)) {
    if (ControlActions.initialize) {
      ControlActions.initialize();
    }
  }
};
