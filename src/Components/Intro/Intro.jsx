import React from 'react'
import {Link} from 'react-router-dom';

function Intro() {
    return (
      <div className="intro container-fluid">
        <div className='row vh-100  intro__container d-flex flex-column align-items-center justify-content-between flex-lg-row'>
       
          
          <div className=' bg-primary  h-50 px-4 py-2 col-lg-5 h-lg-100 d-flex flex-column justify-content-center align-items-center px-lg-5'>
            <div className='intro__desc'>
            <h1 className='text-white titles-font fs-1 position-relative'>Elevamos el sabor a nuevas<span className='intro__cursiva text-terciary cursiva position-absolute'>Alturas</span></h1>
            <p className='text-white paragraph-font mt-2 mb-4'>Pasteleria lider grastronomica hace mas de 10 años en el mercado.</p>
            <Link to="/tienda"><a  className="z-1 w-100 position-relative bg-primary  align-self-start intro__btn btn1 text-danger border border-danger fw-bold titles-font rounded-pill fs-6  px-sm-4  px-lg-5 ">¡Visitar tienda!</a></Link>
            </div>
          </div>
          <div className='bg-white p-0  h-50 d-flex align-items-end col-lg-6 h-lg-100'>
            <img className="w-100 p-0 imagen" src="./Inicio.png" alt="Inicio imagen" />
          </div>
        </div>
      </div>
    );
  }

export default Intro