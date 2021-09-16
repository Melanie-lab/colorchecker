import React from "react";

const Outputcontainer = ({ hexcode, grayvalue, type, text }) => {
  return (
    <div className="colorconverter flex">
      <h2>{type}</h2>
      <div style={{ backgroundColor: hexcode ? "#" + hexcode : grayvalue }}>
        {text}
      </div>
    </div>
  );
};

export default Outputcontainer;
