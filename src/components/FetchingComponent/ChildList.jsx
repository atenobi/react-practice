import React from "react";

const ChildList = ({ arr }) => {
  return (
    <>
      {arr.map((element) => {
        return (
          <div key={element.id} className="item-container column">
            <h4>{element.name}</h4>
            <img src={element.image} alt="image" />
            <p>{element.status}</p>
            <p>{element.species}</p>
          </div>
        );
      })}
    </>
  );
};

export default ChildList;
