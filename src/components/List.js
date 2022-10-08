import React from 'react';
import './list.css';
// import testImage from '../assets/black-panther-web.jpg'
// import testImage1 from '../assets/2-movie-poster-design-aladdin.jpg'
// import testImage2 from '../assets/gettyimages-458467163-612x612.jpg'
// import testImage3 from '../assets/film-movie-poster-of-titanic-F762XE.jpg'
function List(props) {
  
  return (
    <div class="cards">
        {
          props.movieData.map((D)=>
            <div className="container"><img src={`https://image.tmdb.org/t/p/w342${D.backdrop_path} `} alt="movies" /><br/><br/><br/><h4>{`${D.original_title}`}</h4><br/><br/> <h5>{`Ratings:${D.vote_average}`}</h5> <br/><br/><h5>{`Relese Date:${D.release_date}`}</h5><br/><br/> <h6>{`${D.overview}`}</h6><br/><br/>
             <button>{`Add to favorite`}</button></div> 
          )
        }
    </div>
  );
};
export default List;
