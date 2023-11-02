import React, { useState } from "react";

const Practice = () => {
  const [create, setCreate] = useState(false);
  const createTextBox = () => {
    setCreate(true);
  };
  return (
    <div>
      <button onClick={createTextBox}>T</button>
    </div>
  );
};

export default Practice;
