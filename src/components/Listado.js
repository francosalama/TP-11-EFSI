import React, { useEffect, useState } from "react";
import ModalPelicula from "./ModalPelicula";
import Pelicula from "./Pelicula";

const Listado = ({ listadoData }) => {
  return (
    <>
      {listadoData.map((movie, i) => (
        <div>
          <Pelicula movie={movie} key={i} />
          <ModalPelicula pelicula={movie} key={i}></ModalPelicula>
        </div>
        
      ))}
    </>
  );
};

export default Listado;
