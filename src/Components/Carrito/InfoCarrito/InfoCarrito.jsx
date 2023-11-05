import React from 'react'

export const InfoCarrito = () => {
  return (
    <div className='bg-terciary d-flex flex-wrap flex-column flex-lg-row justify-content-around align-items-center px-2 py-5 px-lg-5 py-lg-0'>
        <div className='d-flex flex-column align-items-center'>
            <i class="bi bi-truck info-icono text-white"></i>
            <p className='text-white fw-bold m-0'>ENVIOS</p>
            <p className='text-white text-center info-p paragraph-font'>A TODO EL PAIS</p>
        </div>
        <div className='d-flex flex-column align-items-center'>
        <i class="bi bi-credit-card info-icono text-white"></i>
            <p className='text-white fw-bold m-0'>FORMAS DE PAGO</p>
            <p className='text-white text-center info-p paragraph-font'>TARJETA DE CREDITO, DEBITO, TRANSFERENCIA, RAPIPAGO, PAGO FACIL, EFECTIVO</p>
        </div>
        <div className='d-flex flex-column align-items-center'>
            <i class="bi bi-cash-coin info-icono text-white"></i>
            <p className='text-white fw-bold m-0'>PROMOCIONES</p>
            <p className='text-white text-center info-p paragraph-font'>Y DESCUENTOS</p>
        </div>
        <div className='d-flex flex-column align-items-center'>
            <i class="bi bi-box-seam-fill info-icono text-white"></i>
            <p className='text-white fw-bold m-0'>VENTA MAYORISTA</p>
        </div>

    </div>
  )
}
