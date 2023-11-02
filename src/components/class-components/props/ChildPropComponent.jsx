import PropTypes from "prop-types";
import React, { Component } from "react";

export class ChildPropComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        Hii My name is {this.props.name} and my Number is {this.props.phone}.
      </div>
    );
  }
}

ChildPropComponent.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.number,
};

ChildPropComponent.defaultProps = {
  name: "Sachin Kaythamwar",
  phone: "xxxxxxxxxx",
};

export default ChildPropComponent;
