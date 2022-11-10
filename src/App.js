import React, { useEffect, useState } from 'react';
import './App.css';
import './components/head.css';
import './components/list.css';
import './components/search.css';
import Header from './components/Header';
import Search from './components/Search';
import List from './components/List';

function getMovies(searchText) {
  let url = "https://api.themoviedb.org/3/movie/top_rated?api_key=cc31d08b0d4b5b3539a406e5af2aec1f&language=en-US&page=1";
  if (searchText) {
     url = `https://api.themoviedb.org/3/search/movie?api_key=cc31d08b0d4b5b3539a406e5af2aec1f&language=en-US&page=1&include_adult=false&query=${searchText}`;
   }
  return fetch(url);
}

function App() {
  const [movieData, setMovieData] = useState([])
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const processData = (promise) => {
    promise.then((responce) => responce.json())
      .then((data) => {
        setMovieData(data.results)
        setFilteredData(data.responce)
      }).catch(Error);
  }

  useEffect(() => {
    let timerOut;
    console.log('inside useeffect');
    if (searchText) {
      timerOut = setTimeout(function () {
        processData(getMovies(searchText));
      }, 300);
    } else {
      processData(getMovies(searchText));
    }
    return () => clearTimeout(timerOut);
  }, [searchText]);


  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);    
    setFilteredData(result);
    setSearchText(value);
  }


  function add_fav() {
    if (localStorage.getItem('add_fav')) {
      localStorage.setItem('add_fav', Number(localStorage.getItem('add_fav')) + 1);
    } else {
      localStorage.setItem('add_fav', 1);
    }
  }

  return (
    <div className="App">
      <Header />
      <Search handleSearch={handleSearch}
        filteredData={filteredData}
        searchText={searchText}
      />
      <List movieData={movieData}
        add_fav={add_fav}
      />
    </div>
  );
};
export default App;
