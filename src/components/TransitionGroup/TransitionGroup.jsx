import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

// import from file with our keyframes
import './index.css';

const TransitionGroup = () => {
  const [visibility, setVisimility] = useState(false);

  return (
    <div className="component-container">
      <button onClick={() => setVisimility(!visibility)}>
        {!visibility ? "show " : "hide "}
        element
      </button>

      <CSSTransition in={visibility} 
      classNames={"animated1"} timeout={300} unmountOnExit>
      
        <p className="text-element1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          iure.
        </p>
     
      </CSSTransition>
      {/* another */}
      <CSSTransition in={visibility} 
      classNames={"animated2"} timeout={300} unmountOnExit>
      
        <p className="text-element2">
         Quaerat ab incidunt quos placeat quae!
        </p>
     
      </CSSTransition>
    </div>
  );
};

export default TransitionGroup;
