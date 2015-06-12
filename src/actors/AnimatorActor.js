export default function AnimatorActor(Actions, Replayables) {
  let lastTime = new Date().getTime() / 1000;

  Replayables.BlackTriangle.delay(20).subscribe(({speed}) => {
    const time = new Date().getTime() / 1000;
    const delta = time - lastTime;
    lastTime = time;

    Actions.BlackTriangle.rotate(delta * speed);
  });
}
