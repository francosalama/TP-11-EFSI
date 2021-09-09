import React, { useEffect, useState } from "react";
import Listado from "./Listado";

const API = "http://www.omdbapi.com/?apikey=1a12885f";

const Buscador = () => {
  const [listado, setlistado] = useState({
    data: [],
    loading: true,
    pelicula: "",
    error: "",
  });

  const getMovie = async () => {
    // search
    const res = await fetch(`${API}&s=batman`);
    const resJSON = await res.json();

    if (resJSON) {
      setlistado({
        data: resJSON.Search,
        loading: false,
        error: "",
      });
    }
  };

  useEffect(() => {
    // const res = await fetch("../../assets/data.json");
    getMovie();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (listado.pelicula === "") {
      return setlistado({
        ...listado,
        error: "Por favor escribi alguna pelicula",
      });
    }

    const response = await fetch(`${API}&s=${listado.pelicula}`);
    const data = await response.json();
    console.log(data);

    if (!data.Search) {
      return setlistado({ ...listado, error: "No hay resultados disponibles" });
    }

    return setlistado({
      data: data.Search,
      pelicula: "",
      error: "",
    });
  };

  const { data, loading } = listado;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="row">
        <div className="col-md-4 offset-md-4 p-4">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              onChange={(e) =>
                setlistado({ ...listado, pelicula: e.target.value })
              }
              value={listado.pelicula}
              autoFocus
            />
            <button type="submit">Enviar</button>
          </form>
          <p className="text-white">{listado.error ? listado.error : ""}</p>
        </div>
      </div>
      <div className="row pt-2">
        <Listado listadoData={listado.data}></Listado>
      </div>
    </>
  );
};

export default Buscador;
