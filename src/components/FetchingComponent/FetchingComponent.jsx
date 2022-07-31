import React, { useEffect, useState } from "react";

// child
import ChildList from "./ChildList";


// loader
import Loader from "../UI/Loader/Loader";

const FetchingComponent = () => {
  const [elements, setElements] = useState([]);
  const [isElementsLoading, setIsElementsLoading] = useState(false);

  let api = `https://rickandmortyapi.com/api/character/`;

  const fetchElements = async () => {
    const data = await fetch(`${api}`).then((res) => {
      return res.json();
    });
    setElements(data.results);
  };

  useEffect(() => {
    // fake delay slow internet imitation
    setTimeout(()=> {
        fetchElements();
        setIsElementsLoading(true);
    }, 8000)
  }, []);

  return (
    <div className="component-container">
      {!isElementsLoading ? <div className="center"><Loader /></div>: <ChildList arr={elements} />}
    </div>
  );
};

export default FetchingComponent;
