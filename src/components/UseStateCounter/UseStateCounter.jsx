import React from "react";
import { useState } from "react";

const UseStateCounter = () => {
  const [counterState, setCounterState] = useState(0);
  const [inputState, setInputState] = useState("input value");

  const increaseFunction = () => {
    setCounterState(counterState + 1);
  };

  const decreaseFunction = () => {
    setCounterState(counterState - 1);
  };

  return (
    <div className="component-container">
      <div>
        <h4>use state hook</h4>
        <p>{counterState}</p>
        <button onClick={increaseFunction}>increase</button>
        <button onClick={decreaseFunction}>decrease</button>
      </div>
      <div>
        <h4>input + value (driven element)</h4>
        <p>{inputState}</p>
        <input
          type="text"
          value={inputState}
          onChange={(e) => setInputState(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseStateCounter;
