import React, { useEffect, useState } from "react";
import axios from "axios";

const PaginationComponent = () => {
  const [objets, setObjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    if (fetching) {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${currentPage}`
        )
        .then((response) => {
          setObjects([...objets, ...response.data]);
          setCurrentPage((prev) => prev + 1);
        //   console.log(response.headers["x-total-count"]);
          setTotalCount(response.headers["x-total-count"]);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      objets.length < totalCount
    ) {
      setFetching(true);
    }
  };

  return (
    <div className="component-container">
      {objets.map((object) => {
        return (
          <div key={object.id}>
            <p>{object.title}</p>
            <img src={object.thumbnailUrl} alt="img" />
          </div>
        );
      })}
    </div>
  );
};

export default PaginationComponent;
