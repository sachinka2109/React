import React, { useState } from "react";

const ParagraphConverter = () => {
  const [para, setPara] = useState("");
  const upperCase = () => {
    setPara(para.toUpperCase());
  };
  const lowerCase = () => {
    setPara(para.toLowerCase());
  };
  const removeExtraSpace = () => {
    setPara(para.trim().split(/ +/).join(" "));
  };

  const titleCase = () => {
    setPara(
      para
        .split(" ")
        .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
        .join(" ")
    );
  };

  const clear = () => {
    setPara("");
  };

  const handlePara = (e) => {
    setPara(e.target.value);
  };
  return (
    <div>
      <div className="">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Enter your Paragraph"
          value={para}
          onChange={handlePara}
        ></textarea>
        <div className="actions">
          <button onClick={upperCase}>Uppercase</button>
          <button onClick={lowerCase}>Lowercase</button>
          <button onClick={titleCase}>Titlecase</button>
          <button onClick={removeExtraSpace}>Remove Extra Spaces</button>
          <button onClick={clear}>Clear</button>
        </div>
      </div>
    </div>
  );
};

export default ParagraphConverter;
