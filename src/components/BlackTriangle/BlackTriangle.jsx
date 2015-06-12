import React from "react";
import Base from "../Base";

export default class BlackTriangle extends Base {
  render() {
    return (
      <div className={this.getComponentClasses()}>
        <h1>Use buttons to change rotation speed</h1>
        <div
          className={this.c("inner")}
          style={{transform: `rotate(${this.props.angle}deg)`}}
        />
        <button 
          onClick={this.props.Actions.adjustSpeed.bind(null, -10)} className={this.c("left")}>
          <i className="fa fa-rotate-left"></i>
        </button>
        <button onClick={this.props.Actions.adjustSpeed.bind(null, 10)} className={this.c("right")}>
          <i className="fa fa-rotate-right"></i>
        </button>
      </div>
    );
  }
}
