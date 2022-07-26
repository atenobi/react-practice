import React from "react";
import PropTypes from 'prop-types';

const ElementList = ({ elements, title, remove }) => {
  return (
    <>
      <h4>{title}</h4>
      {elements.map((element) => {
        return (
          <div key={element.id}>
            <h5>{element.title}</h5>
            <p>{element.body}</p>
            <button onClick={()=> remove(element)}>Remove this item</button>
          </div>
        );
      })}
    </>
  );
};

ElementList.propTypes = {
    elements: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    remove: PropTypes.func.isRequired,
};

export default ElementList;
