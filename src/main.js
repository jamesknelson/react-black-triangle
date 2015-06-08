import "babel/polyfill";
import React from "react";
import Application from "./components/Application";


React.initializeTouchEvents(true);

// Hack to avoid flash of unstyled content
window.setTimeout(
  () => React.render(React.createElement(Application), document.getElementById('react-app')),
  400
);
