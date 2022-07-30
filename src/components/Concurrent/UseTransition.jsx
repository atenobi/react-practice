import React, { useMemo, useState, useTransition } from "react";

// default items
import { defaultItems } from "./defaultItems";

const UseTransition = () => {
  const [items, setItems] = useState(defaultItems);
  const [value, setValue] = useState("");
  const [filteredValue, setFilteredValue] = useState('');

  // new hook for better UX, he can separate render function to some parts(chanks), and we can cach events when redder is executing
  // isPending --- bool flag
  // startTransition --- function for delay render

  const [isPending, startTransition] = useTransition();

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.title.toLocaleLowerCase().includes(filteredValue)
    );
  }, [filteredValue]);

  const onChangeValue = (e) => {
    setValue(e.target.value);
    startTransition(()=>{
        setFilteredValue(e.target.value);
    })
  };

  console.log(defaultItems);
  return (
    <div className="component-container">
      <input type="text" value={value} onChange={onChangeValue} />
      {isPending && <h3>Loading...</h3>}

      {filteredItems.map((item) => {
        return (
          <div key={item.id} className="item-container">
            <h4>{item.id}</h4>
            <h4>{item.title}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default UseTransition;
