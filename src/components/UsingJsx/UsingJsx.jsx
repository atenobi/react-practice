import React from "react";

import { arrayOfObjects } from "../../constants/arayOfItem";

const UsingJsx = () => {
  return (
    <div className="component-container">
      <h4>mappind array</h4>
      {arrayOfObjects.map((person) => {
        return (
          <div key={person.id}>
            <p>{person.name}</p>
            <p>{person.age}</p>
            <p>{person.profession}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UsingJsx;
