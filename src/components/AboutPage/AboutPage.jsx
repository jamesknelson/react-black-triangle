import React from "react";
import Base from "../Base";

export default class AboutPage extends Base {
  render() {
    return (
      <div className={this.getComponentClasses()}>
        <h1>About</h1>
      </div>
    );
  }
}
