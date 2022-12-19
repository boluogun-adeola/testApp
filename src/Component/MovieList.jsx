import React from "react";
import '../styles/movie.css'

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
	<div className="row">
	{movies.map((movie,index) => (
        <div key={index} className="movie">
          <p>{movie.Title}</p>
        </div>
      ))}
	</div>

    </div>
  );
};

export default MovieList;
