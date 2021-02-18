import React from "react";
import LoginForm from "./Login";

var isLoggedIn = false;

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <LoginForm />}
      {/* AND operator 
      //currentTime > 12 && <h1>Why are you still working</h1> */}
    </div>
  );
}

export default App;
