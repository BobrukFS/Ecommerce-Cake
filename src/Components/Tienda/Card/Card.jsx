import React from "react";

const Card = ({titulo, descripcion, img, precio, id}) => {
  return (
    <>
      <div className="card z-n1" id={id}>
        <img
          src={img}
          class="card-img-top imagen-card"
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
            <p className="text-secondary fw-bold fs-5 m-0 my-1">${precio}</p>
            <a href="#" class="btn btn-primary">
              Añadir al carrito
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
