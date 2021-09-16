import React, { useState } from "react";

const Inputform = ({ updateInput, label, initialValue }) => {
  const [input, setInput] = useState(initialValue);

  return (
    <div className="app">
      <form className="flex">
        <label htmlFor="color-foreground">{label}</label>
        <input
          name="color-foreground"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            updateInput(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Inputform;
