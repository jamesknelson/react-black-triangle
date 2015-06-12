import React from "react";
import Base from "../Base";

export default class ApplicationLayout extends Base {
  render() {
    return (
      <div className={this.getComponentClasses()}>
        <div className={this.c("nav")}>
          {this.props.nav}
        </div>
        <div className={this.c("page")}>
          {this.props.page}
        </div>
      </div>
    );
  }
}
