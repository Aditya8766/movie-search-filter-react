import React from 'react';
import './search.css';

function Search(props) {
    return (
      <div className="search">
       
       <input type="text" aria-label="cost-input" name="search" placeholder="Search..." onChange={(event) => props.handleSearch(event)} />
      {
        props.filteredData && props.filteredData.map((S)=>{
          return(
            
            <div className="filter">
            {S.original_title}
            </div>
            )
        })
      }
      </div>

    )
  };
  export default Search;
  
