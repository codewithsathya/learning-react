import React from "react";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        onChange={onSearch}
      />
    </div>
  );
};

export default SearchBar;
