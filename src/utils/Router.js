import Router from "routr"
import _ from "lodash"


const paths = {
  'about': "/about",
  'triangle': "/triangle",
};

const router = new Router(_.mapValues(paths, path => ({path: path, method: "get"})));


export function getLocation() {
  return window.location.hash.substr(1);
}

export function getRoute() {
  return router.getRoute(getLocation()) || {name: '404'};
}
