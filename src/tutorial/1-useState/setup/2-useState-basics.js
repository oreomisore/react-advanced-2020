import React, { useState } from "react";

// use
// component name must be uppercase
// must be in the funciton/component body
// cannot call conditionally

// useState - name function that we get from react, must have curly braces
// allows us to track state in a function component.State generally refers to data or properties that need to be tracking in an application.

const UseStateBasics = () => {
  // console.log(useState("hello world"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

  const [text, setText] = useState("random title");

  const handleClick = () => {
    if (text === "random title") {
      setText("hello world");
    } else {
      setText("random title");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
