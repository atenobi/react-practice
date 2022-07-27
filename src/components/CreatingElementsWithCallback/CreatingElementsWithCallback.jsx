import React, { useState, useMemo, useEffect } from "react";

// childrems components
import CreationForm from "./ChildsFormLIst/CreationForm";
import ElementList from "./ChildsFormLIst/ElementList";

// UI
import MySelect from "../UI/MySelect/MySelect";
import MyInput from "../UI/MyInput/MyInput";
// import MyModal from "../UI/MyModal/MyModal";

const CreatingElementsWithCallback = () => {
  const [elemArray, setElemArray] = useState([
    {
      id: 1,
      title: "title - 1",
      body: "it`s 1 element Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, animi",
    },
    {
      id: 2,
      title: "title - 2",
      body: "it`s 2 element Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, debitis",
    },
  ]);

  const [selectedSort, setSelectedSort] = useState("");
  const [searchquery, setSearchQuery] = useState("");

  const sortedElements = useMemo(() => {
    // callback + arr of deps (it`s for optimisation if one of deps change -> call callback)
    if (selectedSort) {
      return [...elemArray].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    } else {
      return elemArray;
    }
  }, [selectedSort, elemArray]);

  // searchig function
  const sortedAndSearchedElems = useMemo(() => {
    return sortedElements.filter((elem) =>
      elem.title.toLowerCase().includes(searchquery.toLowerCase())
    );
  }, [searchquery, sortedElements]);

  const sortFunction = (sort) => {
    setSelectedSort(sort);
  };

  const createNewEl = (newEl) => {
    setElemArray([...elemArray, newEl]);
  };

  const removeEl = (elem) => {
    setElemArray(elemArray.filter((el) => el.id !== elem.id));
  };

  useEffect(()=> {}, [sortedAndSearchedElems]);

  return (
    <div className="component-container">
      <CreationForm addNewEl={createNewEl} />

      {/* <MyModal></MyModal> */}

      <MyInput
        value={searchquery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="search"
      />

      <MySelect
        defaultValue="Sort by"
        options={[
          {
            value: "title",
            name: "by title",
          },
          {
            value: "body",
            name: "by text",
          },
        ]}
        value={selectedSort}
        onChange={sortFunction}
      />

      <ElementList
        elements={sortedAndSearchedElems}
        title="Elements on page"
        remove={removeEl}
      />
    </div>
  );
};

export default CreatingElementsWithCallback;
