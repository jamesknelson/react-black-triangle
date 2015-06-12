import Rx from "rx";


export default function BlackTriangleModel(Observables) {
  return Rx.Observable.concat(
    Observables.BlackTriangle.initialize,
    Rx.Observable.merge(
      Observables.BlackTriangle.rotate,
      Observables.BlackTriangle.adjustSpeed
    )
  )
    .scan((current, delta) => {
      const {angle: currentAngle, speed: currentSpeed} = current;
      const {angle: angleDelta, speed: speedDelta} = delta;

      const angle = (currentAngle + (angleDelta || 0)) % 360;
      const speed = currentSpeed + (speedDelta || 0);

      return {angle, speed};
    });
}
