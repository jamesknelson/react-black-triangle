import React from "react";
import Base from "./Base";

class Application extends Base {
  render() {
    return (
      <div className={this.getComponentClasses()} />
    );
  }
}

export default Application;
