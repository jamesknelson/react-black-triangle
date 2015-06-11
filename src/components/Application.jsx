import React from "react";
import Base from "./Base";

class Application extends Base {
  constructor(props) {
    super(props);
    this.Actions = props.actions;
  }

  render() {
    return (
      <div className={this.getComponentClasses()}>
        <dl>
          <dt>Route name</dt><dd>{this.props.route.name}</dd>
          <dt>Angle</dt><dd>{this.props.angle}</dd>
        </dl>
        <button onClick={this.Actions.BlackTriangle.rotateLeft.bind(null, 1)}>Rotate left</button>
        <button onClick={this.Actions.BlackTriangle.rotateRight.bind(null, 1)}>Rotate right</button>
      </div>
    );
  }
}

export default Application;
