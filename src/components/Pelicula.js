import React from "react";
import ModalPelicula from "./ModalPelicula";

const Pelicula = ({ movie }) => {


  const modal = "#" + movie.imdbID;

  return (
    <div class="container">
      <div class="movie-card">
        <div class="movie-header manOfSteel">
          <img src={movie.Poster}></img>

          <div class="header-icon-container"></div>
        </div>
        <div class="movie-content">
          <div class="movie-content-header">
            <a href="#">
              <h3 class="movie-title">{movie.Title}</h3>
            </a>
            <div class="imax-logo"></div>
          </div>
          <div class="movie-info">
            <div class="info-section">
              <label>Year</label>
              <span>{movie.Year}</span>
            </div>
            <div class="info-section">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target={modal}
              >
                Mas Detalles
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Pelicula;
