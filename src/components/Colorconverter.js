import React, { useState } from "react";
import Outputcontainer from "./Outputcontainer";
import useFetch from "./useFetch";
import useValidateInput from "./useValidateInput";
import Inputform from "./Inputform";

const Colorchecker = ({ label, initalColor }) => {
  const [input, setInput] = useState(initalColor);
  const validHexcode = useValidateInput(input);
  const grayvalue = useFetch(validHexcode);

  const updateInput = (input) => {
    setInput(input);
  };

  return (
    <div className="colorchecker">
      <Inputform
        updateInput={updateInput}
        label={label}
        initialValue={"fff000"}
      />
      <Outputcontainer hexcode={validHexcode} type="Farbe" text="" />
      <Outputcontainer grayvalue={grayvalue} type="Grauwert" text="" />
      <Outputcontainer hexcode="#fff" type="Grauwert Code" text={grayvalue} />
      <p>
        {!validHexcode &&
          "Bitte überprüfen Sie den Hexcode von " +
            label +
            "!. Der Hexcode besteht aus 6 Zeichen. Er darf nur Zahlen von 0-9 und Buchstaben von A-F enthalten."}
      </p>
    </div>
  );
};

export default Colorchecker;
