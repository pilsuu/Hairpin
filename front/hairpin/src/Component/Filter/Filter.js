import React from "react";
import "./Filter.css";

const FilterComponent = ({ label, left, top }) => (
  <div
    className="filter-container-wrapper"
    style={{
      position: "absolute",
      left,
      top,
      width: 85,
    }}
  >
    <div className="filter-wrapper">
      <div className="filter-text">{label}</div>
    </div>

    <img
      className="filter-img"
      alt="filter"
      src="https://c.animaapp.com/pnmyay9o/img/vector-5.svg"
    />
  </div>
);

export default function Filter() {
  return (
    <>
      <FilterComponent label="성별" left={519} top={308} />
      <FilterComponent label="종목" left={417} top={308} />
      <FilterComponent label="지역" left={316} top={308} />
    </>
  );
}
