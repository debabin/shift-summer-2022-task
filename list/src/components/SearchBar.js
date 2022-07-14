import React from "react";
export const SearchBar = ({value, onChange}) => {
  return (
    <span className="search-bar">
      🔎
      <input type="search" placeholder="Search" value={value} onChange = {onChange} autoFocus />
    </span>)
};