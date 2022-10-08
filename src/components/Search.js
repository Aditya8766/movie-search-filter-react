import React from 'react';
import './search.css';

function Search(props) {
    return (
      <div class="search">
        <input type="text" placeholder="Search..." onChange={(event) => props.handleSearch(event)} />

      {
        props.filteredData.map((S)=>{
          return(
            
            <div class="filter">
            {S.original_title}
            </div>
            )
        })
      }
      </div>

    )
  };
  export default Search;
  