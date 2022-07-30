import React, { useState } from "react";
// function for cancel
import { flushSync } from "react-dom";

const AsynchBaching = () => {
  const [state, setState] = useState(0);
  const [value, setValue] = useState(0);

  console.log("render");

  // batching - it`s special tool in react wich can collect some changes(state) 2 and more, and execute only 1 rerender fo this page
  // in react 17 batching with async event`s: timeouts/promises don`t work
  // in 18 v react can use batching with async code

  const update = () => {
    // example with timeout

    // setTimeout(()=> {
    //     setState(prev => prev + 1);
    //     setValue(prev => prev + 1);
    // }, 0)

    // example with promise

    // Promise.resolve().then(() => {
    //   setState((prev) => prev + 1);
    //   setValue((prev) => prev + 1);
    // });

    // example with promise if we need to cansel batching
    
    Promise.resolve().then(() => {
      flushSync(() => {
        setState((prev) => prev + 1);
      });
      flushSync(() => {
        setValue((prev) => prev + 1);
      });
    });
  };

  return (
    <div className="component-container">
      <h4>state = {state}</h4>
      <h4>value = {value}</h4>
      <button onClick={update}>update</button>
    </div>
  );
};

export default AsynchBaching;
