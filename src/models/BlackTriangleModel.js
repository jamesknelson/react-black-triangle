import Rx from "rx";


export default function BlackTriangleModel(Observables) {
  return Rx.Observable.concat(
    Observables.BlackTriangle.initialize,
    Rx.Observable.merge(
      Observables.BlackTriangle.rotateLeft.map(angle => -angle),
      Observables.BlackTriangle.rotateRight
    )
  )
    .scan((current, delta) => current + delta);
}
