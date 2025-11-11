import React from "react";

function Search({ value, onQueryChange }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={value}
        placeholder="Type a name to search..."
        onChange={(e) => onQueryChange(e.target.value)}
      />
    </div>
  );
}

export default Search;
