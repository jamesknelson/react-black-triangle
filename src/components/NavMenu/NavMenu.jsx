import React from "react";
import Base from "../Base";
import Link from "../Link";


class NavMenuItem extends Base {
  render() {
    return (
      <Link
        className={this.getComponentClasses()}
        to={this.props.to}
        activeClassName={this.c("active")}>
        <i className={`${this.c("icon")} fa fa-${this.props.icon}`} />
        <span className={this.c("title")}>{this.props.title}</span>
      </Link>
    )
  }
}


export default class NavMenu extends Base {
  render() {
    const linkActiveClass = this.c("active");

    return (
      <nav className={this.getComponentClasses()}>
        <NavMenuItem to="triangle" icon="play" title="Black Triangle" />
        <NavMenuItem to="about" icon="info-circle" title="About" />
      </nav>
    );
  }
}
