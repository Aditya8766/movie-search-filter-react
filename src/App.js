import React, { useEffect, useState } from 'react';
import './App.css';
import './components/head.css';
import './components/list.css';
import './components/search.css';
import Header from './components/Header';
import Search from './components/Search';
import List from './components/List';


function App() {
  const [movieData, setMovieData] = useState([])
  const [filteredData, setFilteredData] = useState([]);
  const [searchText,setSearchText]=useState("");
  console.log(searchText)
 
  useEffect(()=>{
   let timerOut= setTimeout(()=>{
      let url = "https://api.themoviedb.org/3/movie/top_rated?api_key=cc31d08b0d4b5b3539a406e5af2aec1f&language=en-US&page=1";
      if(searchText){
          // url=url+`query=${searchText}`;
        url=`https://api.themoviedb.org/3/search/movie?api_key=cc31d08b0d4b5b3539a406e5af2aec1f&language=en-US&page=1&include_adult=false&query=${searchText}`;
        fetch(url)
        .then((responce) => responce.json())
        .then((data) => setMovieData(data.results))
        .then((data) => setFilteredData(data.responce))
        .then((data) => setSearchText(data.responce))
        .catch((error) => console.log(error));
      }
    },300)
    // console.log("useEffect::",searchText);
    return()=>clearTimeout(timerOut);
   
  },[searchText]);
  

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = [].filter((data) => {
      return data.title.search(value) != -1;
    });
    setFilteredData(result);
    setSearchText(value);
  }


  return (
    <div class="App">
      <Header />
      <Search handleSearch={handleSearch}
        filteredData={filteredData}
        searchText={searchText}
         />
      <List movieData={movieData}
      />
    </div>
  );
};

export default App;
