import Routr from "routr"

const router = new Routr({
  'about': {path: "/about", method: "get"},
  'triangle': {path: "/triangle", method: "get"},
});

export default router;
