import { useState, useEffect } from "react";

const useValidateInput = (hexcode) => {
  const [validHexcode, setValidHexcode] = useState(true);

  useEffect(() => {
    const hexpattern = new RegExp(/\b^[0-9a-f]{6}\b/i);
    const validInput = hexpattern.test(hexcode);

    validInput ? setValidHexcode(hexcode) : setValidHexcode(null);
  }, [hexcode]);

  return validHexcode;
};

export default useValidateInput;
