import React from "react";
import { useState } from "react";

const Categorias = ({ setCategoriaSeleccionada, categoriaSeleccionada }) => {
  const categorias = ["Todos", "Pasteles", "Sliced", "Vegan"];
  const listaCategorias = document.getElementsByClassName("lista-categorias");

  const clickCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  const openMenu = () => {
    listaCategorias[0].classList.toggle("active");
  };
  return (
    <>
      <div
        className="d-flex bg-white text-terciary fw-bold titles-font btn-categorias align-items-center gap-2 my-2"
        onClick={openMenu}
      >
        <p className="fs-4 my-2 my-md-0">Categorias</p>
        <i className="bi bi-chevron-down btn-down" ></i>
      </div>

      <ul className="lista-categorias py-3 px-3 py-md-0 px-md-0 bg-white">
        {categorias.map((element, index) => {
          return (
            <div key={index} className="d-flex align-items-center gap-3 justify-content-start item-categoria">
              <img className="imgCategorias" src={`./${element}.png`} alt="" />
              <li
                
                className={categoriaSeleccionada === element ? "selected" : ""}
                onClick={() => clickCategoria(element)}
              >
                {element}
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Categorias;
