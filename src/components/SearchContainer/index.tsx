import React from "react";
import { RiSearch2Line } from "react-icons/ri";

const SearchContainer = () => {
  return (
    <div className="form-container">
      <RiSearch2Line color="#a9abb1" />
      <input placeholder="Search" />
    </div>
  );
};

export default SearchContainer;
