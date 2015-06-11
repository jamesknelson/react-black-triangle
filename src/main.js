import "babel/polyfill";
import {run} from "./utils/Chairman";

// Controls
import NavigationControl from "./controls/NavigationControl";
import BlackTriangleControl from "./controls/BlackTriangleControl";

// Models
import NavigationModel from "./models/NavigationModel";
import BlackTriangleModel from "./models/BlackTriangleModel";

// Actors
import UserInterfaceActor from "./actors/UserInterfaceActor";


const app = run({
  controls: {
    Navigation: NavigationControl,
    BlackTriangle: BlackTriangleControl,
  },
  models: {
    Navigation: NavigationModel,
    BlackTriangle: BlackTriangleModel,
  },
  actors: {
    UserInterfaceActor
  },
});
