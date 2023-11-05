import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ProductosContext from '../../../contexts/ProductosContext';

export const ProductoAlta = ({titulo, descripcion, img, precio, id, stock, setId, setVisible,eliminarProducto}) => {
  const htmlElement = document.querySelector('html');
  const { eliminarProductoContext } = useContext(ProductosContext)
  const openModalEdit = ()=>{
     setId(id)
     setVisible(true)
     const catalogo = document.getElementsByClassName('catalogo');
     catalogo[0].classList.add('blur-background');
     const header = document.getElementsByClassName('header');
     header[0].classList.add('blur-background');
     htmlElement.style.overflow = "hidden";
  }

 
  return (
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
          <div className='d-flex flex-column'>
            <p className="text-secondary fw-bold fs-5 m-0 my-1 precio">Precio: ${precio}</p>
            <p className="text-secondary paragraph-font m-0 text-secondary">Stock: {stock}</p>
            <div className='d-flex align-items-center justify-content-between'>
              <div className='d-flex gap-2'>
              <i class="bi bi-eye-fill"></i>
              <i class="bi bi-trash-fill" onClick={() => eliminarProducto(id)}></i>
              </div>
            <button onClick={openModalEdit} type='button' className='btn bg-secondary text-white titles-font fw-bold align-self-end'><i class="bi bi-pencil-fill"></i></button>
            </div>
            
          
          </div>
        </div>
      </div>
  )
}
