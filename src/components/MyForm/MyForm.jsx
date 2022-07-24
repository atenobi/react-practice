import React, { useRef, useState } from "react";

import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";

const MyForm = () => {
  const [inputText, setInputText] = useState("insert your text");

  // use ref
  const refHook = useRef();

  const addNewText = (e) => {
    e.preventDefault();
    console.log(inputText);
    console.log(refHook.current.value)
  };

  return (
    <div className="component-container">
      <h4>form with driven castom button input + useRefHook</h4>
      <MyButton onClick={addNewText}>test button</MyButton>
      <MyInput
        type="text"
        placeholder={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <input type="text" ref={refHook} placeholder="useRef hook" />
    </div>
  );
};

export default MyForm;
