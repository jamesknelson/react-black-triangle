export function entries(obj) {
  return Object.keys(obj).map(key => [key, obj[key]]);
}
