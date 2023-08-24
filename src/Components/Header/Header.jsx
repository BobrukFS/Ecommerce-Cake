import React from 'react';
import {Link} from 'react-router-dom';

function Header() {


  const abrirMenu = ()=>{
    const btn = document.getElementsByClassName('btn1');
    const nav = document.getElementsByClassName("header__nav");
    if(btn[0].classList.contains("not-active")){
      btn[0].classList.replace("not-active", "active");
      nav[0].classList.toggle("desplegado");
    }else if(btn[0].classList.contains("active")){
      btn[0].classList.replace("active", "not-active");
      nav[0].classList.toggle("desplegado");
    }
  }

  return (
    <>
        <div className='header container-fluid d-flex w-100 align-items-center justify-content-between p-2 position-fixed   top-0 start-0'>
        <p className='fs-1 cursiva ms-1'>Sweet<span className='text-terciary'>Cake</span></p>
        <div className="box z-3 d-md-none">
                <div className="btn1  not-active d-block d-lg-none bg-primary border border-danger position-relative" onClick={abrirMenu}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
        </div>
            <nav className=' header__nav z-2 d-flex flex-column flex-md-row  justify-content-center justify-content-md-end align-items-center h-100 w-100 position-lg-relative top-0 start-0  '>
            <Link className=' text-decoration-none mb-4 mb-md-0 mx-md-3 fs-3 paragraph-font' to="/">Inicio</Link>
                <Link className=' text-decoration-none mb-4 mb-md-0 mx-md-3 fs-3 paragraph-font' to="/about">Nosotros</Link>
                <Link className=' text-decoration-none mb-4 mb-md-0 mx-md-3 fs-3 paragraph-font' to="/contact">Contacto</Link>
                <Link className=' text-decoration-none mb-4 mb-md-0 mx-md-3 fs-3 paragraph-font' to="/Tienda">Tienda</Link>
                <Link className="carrito position-relative d-flex bg-primary border border-danger"><i className="bi bi-cart3 text-white fs-1"></i></Link>
            </nav>
        </div>

    </>
  )
}

export default Header