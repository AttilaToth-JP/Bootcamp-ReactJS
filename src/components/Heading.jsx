import React from "react";

function Heading() {
  const heading = {
    color: ""
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

  return (
    <h1 style={heading} className="heading">
      {greeting()}
    </h1>
  );
}
export default Heading;
