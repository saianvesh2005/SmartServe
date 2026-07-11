import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchBox({
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="search-box">

      <FaSearch />

      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

    </div>
  );
}

export default SearchBox;