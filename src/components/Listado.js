import React, { useEffect, useState } from "react";
import Pelicula from "./Pelicula";

const Listado = ({ listadoData }) => {
  return (
    <>
      {listadoData.map((movie, i) => (
        <Pelicula movie={movie} key={i} />
      ))}
    </>
  );
};

export default Listado;
