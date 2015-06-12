import React from "react";
import Base from "../Base";

class BlackTriangle extends Base {
  render() {
    const adjustSpeed = this.context.Actions.BlackTriangle.adjustSpeed;

    return (
      <div className={this.getComponentClasses()}>
        <h1>Use buttons to change rotation speed</h1>
        <div
          className={this.c("inner")}
          style={{transform: `rotate(${this.props.angle}deg)`}}
        />
        <button 
          onClick={adjustSpeed.bind(null, -10)} className={this.c("left")}>
          <i className="fa fa-rotate-left"></i>
        </button>
        <button onClick={adjustSpeed.bind(null, 10)} className={this.c("right")}>
          <i className="fa fa-rotate-right"></i>
        </button>
      </div>
    );
  }
}

BlackTriangle.contextTypes = {
  Actions: React.PropTypes.object
};

export default BlackTriangle;
