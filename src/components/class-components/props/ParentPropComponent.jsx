import React, { Component } from "react";
import ChildPropComponent from "./ChildPropComponent";

export class ParentPropComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "sachin",
      phone: 9604725679,
    };
  }
  render() {
    return (
      <ChildPropComponent name={this.state.name} phone={this.state.phone} />
    );
  }
}

export default ParentPropComponent;
