import PropTypes from "prop-types";
import React, { Component } from "react";

export class ClassParentState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: "red",
      color: "white",
    };
  }
  changetheme = () => {
    this.setState((prev) =>
      prev.backgroundColor === "red"
        ? { backgroundColor: "black", color: "white" }
        : { backgroundColor: "red", color: "white" }
    );
  };
  render() {
    return (
      <div>
        <div
          className="box"
          style={{
            backgroundColor: this.state.backgroundColor,
            color: this.state.color,
          }}
        >
          hii
        </div>
        <button onClick={this.changetheme}>click to change theme</button>
      </div>
    );
  }
}

export default ClassParentState;
