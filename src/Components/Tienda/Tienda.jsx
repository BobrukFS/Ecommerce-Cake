import React, { useContext } from "react";
import Categorias from "./Categorias/Categorias";
import Card from "./Card/Card";
import { useEffect } from "react";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import ProductosContext from '../../contexts/ProductosContext';
function Tienda() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");
  const [productosSinFiltrar, setProductosSinFiltrar] = useState([]);
  const { productos } = useContext(ProductosContext)

  useEffect(() => {
    if (productos) {
      setProductosSinFiltrar(productos);
    }
  }, [productos]);

  const productosFiltrados =
    categoriaSeleccionada === "Todos"
      ? productosSinFiltrar
      : productosSinFiltrar.filter(
          (producto) => producto.categoria === categoriaSeleccionada
        );

  return (
    <>
      <div className="tienda row d-flex flex-column justify-content-start align-items-center">
        <div className="bg-secondary d-flex py-2  justify-content-center align-items-center gap-4">
          <p className="fs-4 text-white m-0 titles-font text-center ">Hacemos envios en todo el pais    <i class="bi bi-truck text-white fs-3"></i></p>          
        </div>
        
        <div className="row d-flex align-items-center justify-content-center bg-primary py-lg-4 py-4 px-5">
          <h2 className="col-md-2 text-secondary  fs-1 text-center titles-font fw-bold my-0 p-0">
            Tienda
          </h2>
          <div className="col-md-10 title-categoria d-flex align-items-center  justify-content-center">
            <span className="circulos"></span>
            <span></span>
            <h3 className="text-white fs-2 text-center titles-font fw-bold my-0 mx-2 mx-sm-3">
              {categoriaSeleccionada}
            </h3>
            <span></span>
            <span className="circulos"></span>
          </div>
        </div>
        <div className="row container-tienda">
          <div className="col-md-2 d-md-flex flex-column align-items-center">
            <Categorias
              setCategoriaSeleccionada={setCategoriaSeleccionada}
              categoriaSeleccionada={categoriaSeleccionada}
            ></Categorias>
          </div>
          <div className=" d-flex col-md-10 flex-wrap row-gap-4 column-gap-4 justify-content-center my-3 mb-5">
            {productosFiltrados.map((producto, index) => {
              return (
                <Card
                  key={index}
                  titulo={producto.titulo}
                  descripcion={producto.descripcion}
                  img={producto.img}
                  precio={producto.precio}
                  id={productos.id}
                  producto={producto}
                ></Card>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Tienda;
