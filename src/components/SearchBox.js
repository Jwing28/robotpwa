import React from "react";

const SearchBox = ({ onChange }) => {
  return (
    <input
      className=""
      onChange={onChange}
      type="search"
      placeholder="search robots"
    />
  );
};

export default SearchBox;
