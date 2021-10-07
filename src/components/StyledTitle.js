import React, { Component } from "react";

class StyledTitle extends Component {
  render() {
    return (
      <h1 className="text-pink-light text-8xl">
        {this.props.children}
      </h1>
    );
  }
}

export default StyledTitle;