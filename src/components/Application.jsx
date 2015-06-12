import React from "react";
import Base from "./Base";
import ApplicationLayout from "./ApplicationLayout/ApplicationLayout";
import NavMenu from "./NavMenu/NavMenu";
import BlackTrianglePage from "./BlackTrianglePage/BlackTrianglePage";
import AboutPage from "./AboutPage/AboutPage";
import NotFoundPage from "./NotFoundPage/NotFoundPage";


class Application extends Base {
  getChildContext() {
    return {
      Actions: this.props.Actions,
      currentRoute: this.props.route
    };
  }
    
  render() {
    let page;

    switch (this.props.route.name) {
      case "about":
        page = <AboutPage />;
        break;

      case "triangle":
        page = <BlackTrianglePage {...this.props.triangle} />;
        break;

      default: 
        page = <NotFoundPage />
    }

    return (
      <ApplicationLayout
        className={this.getComponentClasses()}
        page={page}
        nav={<NavMenu />}
      />
    );
  }
}

Application.childContextTypes = {
  Actions: React.PropTypes.object,
  currentRoute: React.PropTypes.object
};

export default Application;
