import React from "react";
import ReactDOM from "react-dom";

const heading = {
  color: "red"
};

function greeting() {
  const presentHour = new Date().getHours();

  if (presentHour < 12) {
    heading.color = "red";
    return "Good morning";
  } else if (presentHour > 11 && presentHour < 18) {
    heading.color = "green";
    return "Good afternoon";
  } else {
    heading.color = "blue";
    return "Good evening";
  }
}

ReactDOM.render(
  <h1 style={heading} className="heading">
    {greeting()}
  </h1>,
  document.getElementById("root")
);

// Angela's solution:
// const date = new Date();
// const currentTime = date.getHours();

// let greeting;

// const customStyle = {
//   color: ""
// };

// if (currentTime < 12) {
//   greeting = "Good Morning";
//   customStyle.color = "red";
// } else if (currentTime < 18) {
//   greeting = "Good Afternoon";
//   customStyle.color = "green";
// } else {
//   greeting = "Good Night";
//   customStyle.color = "blue";
// }

// ReactDOM.render(
//   <h1 className="heading" style={customStyle}>
//     {greeting}
//   </h1>,
//   document.getElementById("root")
// );
