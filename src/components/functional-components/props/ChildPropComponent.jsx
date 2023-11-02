import React from "react";
import { PropTypes } from "prop-types";

function ChildPropComponent(props) {
  return (
    <div>
      Hii My name is {props.name} and my Number is {props.phone}
    </div>
  );
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
