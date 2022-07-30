import React, { useDeferredValue, useMemo, useState } from "react";

// default items
import { defaultItems } from "./defaultItems";

const UseDeferredValue = () => {
  const [items, setItems] = useState(defaultItems);
  const [value, setValue] = useState("");


  // deffered value - instrument for delay rendering
  // really close to hok useTransition

  const defferedValue = useDeferredValue(value);

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.title.toLocaleLowerCase().includes(defferedValue)
    );
  }, [defferedValue]);

  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="component-container">
      <input type="text" value={value} onChange={onChangeValue} />

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

export default UseDeferredValue;
