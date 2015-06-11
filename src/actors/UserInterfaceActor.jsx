import Rx from "rx";
import React from "react";
import FastClick from "fastclick";
import Application from "../components/Application";


React.initializeTouchEvents(true);
FastClick.attach(document.body);


export default function UserInterfaceActor(Actions, Replayables) {
  // Combine all our observable data into a single observable. You may want to
  // add other observables such as the current logged in user.
  Rx.Observable.combineLatest(
    Replayables.Navigation,
    Replayables.BlackTriangle,

    (route, angle) => ({route, angle})
  )
    .subscribe(state =>
      React.render(
        <Application actions={Actions} {...state} />,
        document.getElementById('react-app')
      )
    );
}
