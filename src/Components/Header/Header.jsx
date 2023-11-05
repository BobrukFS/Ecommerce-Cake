import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CarritoContext from "../../contexts/CarritoContext";
import { CarritoLista } from "./CarritoLista/CarritoLista";
function Header() {
  const { viejoCarrito, obtenerTotalCarrito } = useContext(CarritoContext);

  const [cantidad, setCantidad] = useState(0);
  const [visibleLista, setVisibleLista] = useState(false);

  useEffect(() => {
    setCantidad(obtenerTotalCarrito());
  }, [viejoCarrito]);

  const abrirListaCarrito = () => {
    visibleLista ? setVisibleLista(false) : setVisibleLista(true);
  };
  const htmlElement = document.querySelector('html');
  const abrirMenu = () => {
    const btn = document.getElementsByClassName("btn1");
    const nav = document.getElementsByClassName("header__nav");
    if (btn[0].classList.contains("not-active")) {
      btn[0].classList.replace("not-active", "active");
      nav[0].classList.toggle("desplegado");
      htmlElement.style.overflow = "hidden";
    } else if (btn[0].classList.contains("active")) {
      btn[0].classList.replace("active", "not-active");
      nav[0].classList.toggle("desplegado");
      htmlElement.style.overflow = "auto";
     
    }
  };

  return (
    <>
      <div className=" px-4 header container-fluid d-flex w-100 align-items-center justify-content-between p-2 position-absolute   top-0 start-0 px-lg-5">
        <Link to="/" className="link-logo">
          <p className="fs-1 cursiva ms-1 my-0">
            Sweet<span className="text-terciary">Cake</span>
          </p>
        </Link>
        <div className="box z-3 d-md-none">
          <div
            className="btn1  not-active d-block d-lg-none bg-primary border border-danger position-relative"
            onClick={abrirMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <nav className=" header__nav z-2 d-flex flex-column flex-md-row  justify-content-center justify-content-md-between align-items-center h-100 w-100 position-lg-relative top-0 start-0  ">
          <div className="d-flex flex-column align-items-center flex-md-row mx-4">
            <Link
              className=" text-decoration-none mb-4 mb-md-0 mx-md-3 fs-3 paragraph-font"
              to="/about" onClick={abrirMenu}
            >
              Nosotros
            </Link>
            <Link
              className=" text-decoration-none mb-4 mb-md-0 mx-md-3 fs-3 paragraph-font"
              to="/contact" onClick={abrirMenu}
            >
              Contacto
            </Link>
            <Link
              className=" text-decoration-none mb-4 mb-md-0 mx-md-3 fs-3 paragraph-font"
              to="/tienda" onClick={abrirMenu}
            >
              Tienda
            </Link>
          </div>
          <div className="d-flex flex-column flex-md-row align-items-center">
          <Link
              className=" text-decoration-none mb-4 mb-md-0 mx-md-3 fs-4 paragraph-font"
              to="/alta" 
            >
              Alta
            </Link>
            <Link
              className=" text-decoration-none mb-4 mb-md-0 mx-md-3 fs-4 paragraph-font"
              to="/login" onClick={abrirMenu}
            >
              Iniciar Sesion
            </Link>
            {window.innerWidth > 768 ? (
              <div
                className="carrito position-relative d-flex bg-primary border border-danger"
                onClick={abrirListaCarrito}
              >
                <i className="bi bi-cart3 text-white fs-4"></i>
                <span
                  className={`carrito-cantidad ${
                    cantidad === 0 ? "d-none" : ""
                  }`}
                >
                  {cantidad}
                </span>
                {visibleLista ? <CarritoLista></CarritoLista> : ""}
              </div>
              
            ) : (
              <Link
                to="/carrito"
                className="carrito position-relative d-flex bg-primary border border-danger" onClick={abrirMenu}
              >
                <i className="bi bi-cart3 text-white fs-4"></i>
                <span
                  className={`carrito-cantidad ${
                    cantidad === 0 ? "d-none" : ""
                  }`}
                >
                  {cantidad}
                </span>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
