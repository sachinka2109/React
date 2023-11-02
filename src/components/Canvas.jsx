import React, { useRef, useEffect, useState } from "react";

const Canvas = () => {
  const canvasRef = useRef();
  const [buttonClick, setButtonClick] = useState(false);
  const [textbox, setTextbox] = useState([]);
  const [string, setString] = useState("hello");
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const canvasRect = canvas.getBoundingClientRect();
    let mouseX, mouseY, width, height;
    if (buttonClick === true) {
      canvas.addEventListener("mousedown", (e) => {
        mouseX = e.clientX - canvasRect.left;
        mouseY = e.clientY - canvasRect.top;
      });
      canvas.addEventListener("mouseup", (e) => {
        width = e.clientX - mouseX;
        height = e.clientY - mouseY;
        console.log(mouseX, mouseY, width, height);
        ctx.strokeRect(mouseX, mouseY, width, height);
      });
    }
  }, [buttonClick]);

  const handleCreateTextBox = () => {
    setButtonClick(!buttonClick);
  };

  return (
    <>
      <canvas
        width={1000}
        height={500}
        ref={canvasRef}
        style={{ border: "1px solid black" }}
      />
      <button onClick={handleCreateTextBox}>T</button>
    </>
  );
};

export default Canvas;
