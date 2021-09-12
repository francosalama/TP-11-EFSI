import React, { useEffect, useState } from "react";

const ModalPelicula = ({ pelicula }) => {
  const [movie, setMovie] = useState({});

  const API_KEY = "1a12885f";
  const url = `http://www.omdbapi.com/?t=${pelicula.Title}&apikey=${API_KEY}`;

  const getMovie = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);


  

  function mostrarModal(data) {
    getMovie()
    return (
      <div
        class="modal fade"
        id={movie.imdbID}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                {data.Title}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="container">
                <div class="row">
                  <div class="col-12">
                    <img src={data.Poster}></img>
                  </div>
                </div>
              </div>
              <p class="pt-4">{data.Plot}</p>
              <p>Fecha de lanzamiento = {data.Released}</p>
              <p>Genero = {data.Genre}</p>
              <p>Director = {data.Director}</p>
              <p>imdbRating = {data.imdbRating}</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{mostrarModal(movie)}</>;
};

export default ModalPelicula;
