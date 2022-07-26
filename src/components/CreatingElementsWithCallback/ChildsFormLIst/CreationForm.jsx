import React, { useState } from "react";
import PropTypes from 'prop-types';

const CreationForm = ({ addNewEl }) => {
  const [element, setElement] = useState({
    title: "",
    body: "",
  });

  const createNewEl = (e) => {
    e.preventDefault();
    const newEl = {
      ...element,
      id: Date.now(),
    };
    addNewEl(newEl);
    setElement({ title: "", body: "" });
  };

  return (
    <>
      <input
        type="text"
        value={element.title}
        onChange={(e) => setElement({ ...element, title: e.target.value })}
        placeholder='insert element title'
      />
      <input
        type="text"
        value={element.body}
        onChange={(e) => setElement({ ...element, body: e.target.value })}
        placeholder='insert element body'
      />
      <button type="submit" onClick={createNewEl}>
        create
      </button>
    </>
  );
};

CreationForm.propTypes = {
    addNewEl: PropTypes.func.isRequired,
};

export default CreationForm;
