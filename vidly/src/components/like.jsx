import React, { Component } from "react";
import "font-awesome/css/font-awesome.css";

class Like extends Component {
  state = {
    value: 0,
  };

  handleClick = () => {
    let value = this.state.value;
    value = value === 0 ? 1 : 0;
    this.setState({ value });
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        <i className={this.getLikeClasses()}></i>
      </div>
    );
  }

  getLikeClasses = () => {
    let classes = "fa fa-heart";
    classes += this.state.value === 0 ? "-o" : "";
    return classes;
  };
}

export default Like;
