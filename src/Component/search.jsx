import React, { useState } from "react";
import '../styles/search.css'
const Search = ({search}) => {
  const [searchValue, setSearchValue] = useState("");
const handleChange = (e) => {
    setSearchValue(e.target.value);
  }
 

const handleSearch = (e) => {
    e.preventDefault();
    search(searchValue);
  
    
  }
return (

      <form className="search" onSubmit={handleSearch}>
        <p className="search">Search</p>
        <input
          value={searchValue}
          onChange={handleChange}
          type="text"
        />
        
      </form>
    );
}
export default Search;