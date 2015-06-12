export default (Actions, Replayables) => ({
  initialize() {
    this({speed: 90, angle: 0});
  },

  adjustSpeed(speed) {
    this({speed});
  },

  rotate(angle) {
    this({angle});
  },
});
