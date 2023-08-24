import React from 'react'

function Intro() {
    return (
      <div className="intro container-fluid">
        <div className='row vh-100  intro__container d-flex flex-column align-items-center justify-content-between flex-lg-row'>
          <div className='d-none d-lg-block col-1 bg-primary h-100 border border-1-secondary border-top-0 border-left-0 border-bottom-0'>
            
          </div>
          
          <div className='z-n1  bg-primary  h-50 px-4 py-2 col-lg-5 h-lg-100 d-flex flex-column justify-content-center align-items-center px-lg-5'>
            <div className='intro__desc'>
            <h1 className='text-white titles-font fs-1 position-relative'>Realizamos lo que quieras, deja que tu imaginación <span className='intro__cursiva text-terciary cursiva position-absolute'>Vuele</span></h1>
            <p className='text-white paragraph-font '>Krista Bakery has been Making America favorite baked goods the old-fashioned way: from scratch, in small batches, and using the finest ingredients.</p>
            <a  className="w-100 position-relative bg-primary  align-self-start intro__btn btn1 text-danger border border-danger fw-bold titles-font rounded-pill fs-6">¡Visitar tienda!</a>
            </div>
          </div>
          <div className='bg-white p-0  h-50 d-flex align-items-end col-lg-6 h-lg-100'>
            <img className="w-100 p-0 imagen" src="assets/Inicio.png" alt="Inicio imagen" />
          </div>
        </div>
      </div>
    );
  }

export default Intro