import React from 'react';
import './list.css';
function List(props) {
  console.log("PROPS::", props);
  return (
    <div className="cards">
      {
        props.movieData?.map((D) =>
          <div className="container"><img src={`https://image.tmdb.org/t/p/w342${D.backdrop_path} `} alt="movies" /><br /><br /><br /><h4>{`${D.original_title}`}</h4><br /><br />
           <h5>{`Ratings:${D.vote_average}`}</h5> <br /><br /><h5>{`Relese Date:${D.release_date}`}</h5><br /><br /> <h6>{`${D.overview}`}</h6><br /><br />
            <button onClick={() => { props.add_fav() }}>{`Add To Favorite`}</button>
          </div>
        )
      }
    </div>
  );
};
export default List;
