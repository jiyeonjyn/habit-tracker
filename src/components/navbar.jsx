import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <i className="fas fa-leaf"></i>&nbsp;
        <span>Habit Tracker </span>
        <span>진행 중 : {this.props.totalCount}개</span>
      </nav>
    );
  }
}

export default Navbar;
