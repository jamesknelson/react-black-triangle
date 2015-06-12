import Routr from "routr"

const router = new Routr({
  'triangle': {path: "/", method: "get"},
  'about': {path: "/about", method: "get"},
});

export default router;
