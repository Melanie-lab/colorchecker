import React, { useEffect } from "react";

const Grayvalueconverter = (hexcode) => {
  const [hexcode, setHexcode] = useState(initalColor);
  const [grayValue, setGrayValue] = useState("");

  useEffect(() => {
    const hexpattern = new RegExp(/^[0-9a-f]{6}/i);
    const validInput = hexpattern.test(hexcode);
    !validInput && console.log("error");

    validInput &&
      (async () => {
        const headers = new Headers();
        headers.append("Accept", "application/json");
        const request = new Request("/" + hexcode, {
          headers,
        });

        const response = await fetch(request);
        return await response.json().then((data) => {
          console.log(data);
          setGrayValue(data.grayscale.hex.value);
        });
      })();
  }, [hexcode]);

  return;
};

export default Grayvalueconverter;
