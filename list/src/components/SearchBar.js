import React from "react";
export const SearchBar = ({query, setQuery}) => {
/*const handleQuery = (event) => {
  const query = event.target.value;
  setState({ query: query });
};*/
  return (
    <span className="search-bar">
      🔎
      <input type="search" placeholder="Search" value={query} onChange = {event => setQuery(event.target.value)} autoFocus />
    </span>)
};