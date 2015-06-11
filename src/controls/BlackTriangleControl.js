export default (Actions, Replayables) => ({
  initialize() {
    this(0);
  },

  rotateLeft(angle) {
    this(angle);
  },

  rotateRight(angle) {
    this(angle);
  },
});
