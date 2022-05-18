import React, { useState } from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchText }) => {
  return (
    <div className='search'>
      <MdSearch className='search-icons' size='1.3em'></MdSearch>
      <input
        onChange={(e) => handleSearchText(e.target.value)}
        type='text'
        placeholder='type to search'
      ></input>
    </div>
  );
};
export default Search;
