import React from "react";
import classes from "./MySelect.module.css";

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <>
      <select className={classes.mySelect} value={value} onChange={(e)=> onChange(e.target.value)}>
        <option value="" disabled>
          {defaultValue}
        </option>

        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default MySelect;
