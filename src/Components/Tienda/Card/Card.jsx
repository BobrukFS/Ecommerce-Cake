import React, { useContext, useState } from "react";
import CarritoContext  from "../../../contexts/CarritoContext";

const Card = ({titulo, descripcion, img, precio, id, producto}) => {
 
  const { agregarCarritoContext } = useContext(CarritoContext)

  const handleAdd = () =>{

    agregarCarritoContext(producto)
    
  }

  return (
    <>
      <div className="card" id={id}>
        <img
          src={img}
          className="card-img-top imagen-card"
          alt="..."
        />
        <div className="card-body  d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title fs-5 titles-font fw-bold">{titulo}</h5>
            <p className="card-text paragraph-font">
              {descripcion}
            </p>
          </div>
          <div>
            <p className="text-secondary fw-bold fs-5 m-0 my-1 precio">${precio}</p>
            <div className="d-flex gap-2">
              <btn type="btn" className="btn añadirCarrito text-white fw-bold btn-primary" onClick={handleAdd}>
                Añadir al carrito
              </btn>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
