//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
ReactDOM.render(
  <div>
    <h1>Top three bands I loved as a teenager</h1>
    <ul>
      <li>Kispal es a Borz</li>
      <li>The Cure</li>
      <li>The Doors</li>
    </ul>
  </div>,
  document.getElementById("root")
);
