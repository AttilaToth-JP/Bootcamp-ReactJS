import React from "react";
import ReactDOM from "react-dom";

const fName = "Attila";
const lName = "Toth";
const luckyNr = 37;

ReactDOM.render(
  <div>
    <h1>
      Hello {`${fName} ${lName}`} / {fName + " " + lName}!
    </h1>
    <p>Your lucky number is {luckyNr}.</p>
  </div>,
  document.getElementById("root")
);
