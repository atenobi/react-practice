import React, { useState, useMemo } from "react";

// childrems components
import CreationForm from "./ChildsFormLIst/CreationForm";
import ElementList from "./ChildsFormLIst/ElementList";

// UI
import MySelect from "../UI/MySelect/MySelect";
import MyInput from "../UI/MyInput/MyInput";

const CreatingElementsWithCallback = () => {
  const [elemArray, setElemArray] = useState([
    {
      id: 1,
      title: "title - 1",
      body: "it`s 1 element",
    },
    {
      id: 2,
      title: "title - 2",
      body: "it`s 2 element",
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
    return sortedElements.filter(elem => elem.title.toLowerCase().includes(searchquery.toLowerCase()));
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

  return (
    <div className="component-container">
      <CreationForm addNewEl={createNewEl} />

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

      {sortedAndSearchedElems.length ? (
        <ElementList
          elements={sortedAndSearchedElems}
          title="Elements on page"
          remove={removeEl}
        />
      ) : (
        <>
          <h5>Nothing was finded</h5>
        </>
      )}
    </div>
  );
};

export default CreatingElementsWithCallback;
