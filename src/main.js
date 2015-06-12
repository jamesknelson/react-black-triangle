import "babel/polyfill";
import {initialize} from "maxim";

// Controls
import NavigationControl from "./controls/NavigationControl";
import BlackTriangleControl from "./controls/BlackTriangleControl";

// Models
import NavigationModel from "./models/NavigationModel";
import BlackTriangleModel from "./models/BlackTriangleModel";

// Actors
import UserInterfaceActor from "./actors/UserInterfaceActor";


const app = initialize({
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
