import React from "react";
import Base from "./Base";
import ApplicationLayout from "./ApplicationLayout/ApplicationLayout";
import BlackTriangle from "./BlackTriangle/BlackTriangle";

class Application extends Base {
  constructor(props) {
    super(props);
    this.Actions = props.actions;
  }

  render() {
    return (
      <div className={this.getComponentClasses()}>
        <BlackTriangle
          Actions={this.Actions.BlackTriangle}
          {...this.props.triangle}
        />
      </div>
    );
  }
}

export default Application;
