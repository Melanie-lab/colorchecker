import React, { useEffect, useState } from "react";

const useFetch = (hexcode) => {
  const [grayvalue, setGrayvalue] = useState(hexcode);

  useEffect(() => {
    hexcode !== null &&
      (async () => {
        const headers = new Headers();
        headers.append("Accept", "application/json");
        const request = new Request("/" + hexcode, {
          headers,
        });
        console.log(hexcode);
        const response = await fetch(request);

        return await response.json().then((data) => {
          response.ok &&
            data.status !== "error" &&
            setGrayvalue(data.grayscale.hex.value);
        });
      })();
  }, [hexcode]);

  return grayvalue;
};

export default useFetch;
