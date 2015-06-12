import Rx from "rx";
import React from "react";
import FastClick from "fastclick";
import Application from "../components/Application";


React.initializeTouchEvents(true);
FastClick.attach(document.body);


export default function UserInterfaceActor(Actions, Replayables) {
  Rx.Observable.combineLatest(
    Replayables.Navigation,
    Replayables.BlackTriangle,

    (route, triangle) => ({route, triangle})
  )
    .subscribe(state => {
      React.render(
        <Application Actions={Actions} {...state} />,
        document.getElementById('react-app')
      )
    });
}
