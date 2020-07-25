import React from "react";

const SearchBox = ({ searchField, handleSearch }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--light-green bg-lightest-blue"
        type="search"
        placeholder="Enter Robot Name"
        onChange={handleSearch}
      />
    </div>
  );
};
export default SearchBox;
