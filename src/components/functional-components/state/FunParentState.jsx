import React, { useState } from "react";
import FunChildState from "./FunChildState";

const FunParentState = () => {
  const [background, setBackground] = useState("");

  const onChangeColor = () => {
    console.log(Math.floor(Math.random() * 0xfffff).toString());
    setBackground(`#${Math.floor(Math.random() * 0xfffff).toString()}`);
  };
  return (
    <FunChildState background={background} onChangeColor={onChangeColor} />
  );
};

export default FunParentState;
