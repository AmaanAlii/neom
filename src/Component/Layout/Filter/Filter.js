import React, { useState } from "react";
import "./Filter.css";
import { KeyboardArrowDown } from "@mui/icons-material";
function Filter() {
  const [value, setValue] = useState(500);
  console.log(value);
  return (
    <div className="filter">
      <span>
        <p> Price Range</p>
        {value}
      </span>

      <input
        type="range"
        min={0}
        max={5000}
        value={value}
        step={100}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="filter_category">
        <span>
          <p>Categories</p> <KeyboardArrowDown />
        </span>
        <div>
          <span>
            <input type="checkbox" />
            <p>Categories name</p>
          </span>
          <span>
            <input type="checkbox" />
            <p>Categories name</p>
          </span>
          <span>
            <input type="checkbox" />
            <p>Categories name</p>
          </span>{" "}
          <span>
            <input type="checkbox" />
            <p>Categories name</p>
          </span>
        </div>
      </div>
      <div className="filter_size">
        <p>Select Size</p>
        <span>
          <p>5KG</p>
          <p>10KG</p>
          <p>15KG</p>
          <p>20KG</p>
        </span>
      </div>
    </div>
  );
}

export default Filter;
