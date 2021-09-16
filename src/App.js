import React from "react";
import "./index.css";
import Colorconverter from "./components/Colorconverter";

const App = () => {
  return (
    <div className="app">
      <h1>Color Checker</h1>
      <div className="flex">
        <Colorconverter label="Farbe 1" initalColor="fff000" />
        <Colorconverter label="Farbe 2" initalColor="bbaacc" />
      </div>
    </div>
  );
};

export default App;
