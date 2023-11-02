import React from "react";

const FunChildState = (props) => {
  return (
    <div
      style={{
        width: 200,
        height: 200,
        border: "1px solid black",
        backgroundColor: props.background,
      }}
    >
      Change Theme of box
      <button onClick={props.onChangeColor}>changeTheme</button>
    </div>
  );
};

export default FunChildState;
