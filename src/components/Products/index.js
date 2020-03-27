import React from 'react';


const Movie = ({ id, title, year, runtime, genres, director, actors, plot, posterUrl }) => {
  return (
    <div className="movies">
      <div class="poster">
        <img src={posterUrl} alt="" className="img" />{" "}
      </div>

      <h3 className="title">{title}</h3>
      <div className="details">
        <span className="year">{year}</span>
        <span className="runtime">{runtime}</span>
        <span className="genres">{genres}</span>
        <span className="director">{director}</span>
        <span className="actors">{actors}</span>
        <button></button>
      </div>
      <p>{plot}</p>
      <span className="posterUrl">{posterUrl}</span>
    </div>
  );
}


export default Movie;
