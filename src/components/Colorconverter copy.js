import React, { useState } from "react";
import Outputcontainer from "./Outputcontainer";
import useFetch from "./useFetch";
//mport useValidateInput from "./useValidateInput";

const Colorconverter = ({ label, initalColor }) => {
  const [hexcode, setHexcode] = useState(initalColor);
  // const validInput = useValidateInput(true);
  const [validInput, setValidInput] = useState(true);
  const grayvalue = useFetch(hexcode, validInput);
  //const grayvalue = useFetch(hexcode);

  const validateInput = (input) => {
    input ? setValidInput(true) : setValidInput(false);
  };

  const handleChange = (e) => {
    validateInput(e.target.value);
    setHexcode(e.target.value);
  };

  return (
    <div className="hexconverter">
      <p>
        {
          //!validInput && "Error"
        }
      </p>
      <form className="flex">
        <label htmlFor="color-foreground">{label}</label>
        <input
          name="color-foreground"
          value={hexcode}
          onChange={handleChange}
          //onChange={(e) => setHexcode(e.target.value)}
        />
      </form>
      <Outputcontainer hexcode={hexcode} type="Color" text="" />
      <Outputcontainer grayvalue={grayvalue} type="Grayvalue color" text="" />
      <Outputcontainer hexcode="#fff" type="Grayvalue" text={grayvalue} />
    </div>
  );
};

export default Colorconverter;
