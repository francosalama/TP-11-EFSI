import React from "react";

const Pelicula = ({ movie }) => {
  return (
    <div class="card">
      <div class="card_left">
        <img src={movie.Poster} />
      </div>
      <div class="card_right">
        <h1>{movie.Title.toUpperCase()}</h1>
        <div class="card_right__details">
          <ul>
            <li>{movie.Year}</li>
            <li>{movie.Type}</li>
          </ul>
          <div class="card_right__button">
            <a target="_blank">Mas detalles</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pelicula;
