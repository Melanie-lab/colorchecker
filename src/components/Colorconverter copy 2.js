import React, { useState } from "react";
import Outputcontainer from "./Outputcontainer";
import useFetch from "./useFetch";
import useValidateInput from "./useValidateInput";

const Colorconverter = ({ label, initalColor }) => {
  const [hexcode, setHexcode] = useState(initalColor);
  const validInput = useValidateInput(hexcode);
  const grayvalue = useFetch(hexcode);

  return (
    <div className="hexconverter">
      <form className="flex">
        <label htmlFor="color-foreground">{label}</label>
        <input
          name="color-foreground"
          value={hexcode}
          onChange={(e) => setHexcode(e.target.value)}
        />
      </form>
      <Outputcontainer hexcode={validInput && hexcode} type="Color" text="" />
      <Outputcontainer
        grayvalue={validInput && grayvalue}
        type="Grayvalue"
        text=""
      />
      <Outputcontainer
        hexcode="#fff"
        type="Grayvalue"
        text={validInput && grayvalue}
      />
      <p>
        {!validInput &&
          "Bitte überprüfen Sie den Hexcode von " +
            label +
            "!. Der Hexcode darf nur Zahlen von 0-9 und Buchstaben von A-F enthalten."}
      </p>
    </div>
  );
};

export default Colorconverter;
