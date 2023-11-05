import React, { useContext } from 'react'
import CarritoContext from '../../../contexts/CarritoContext';
import { Link } from 'react-router-dom';

export const CarritoLista = () => {
    const {carrito, eliminarProductoCarritoContext} = useContext(CarritoContext);

  return (
    <div className='lista-carrito-header  rounded d-flex flex-column p-2 gap-2'>
        <div className='lista-carrito-header__contenedor d-flex flex-column align-items-start row-gap-3 p-2'>
      
        {carrito.length == 0 ? "El carrito se encuentra vacio" :
            carrito.map((e, index)=>{
                console.log(e.id);
                return (
                    <div
            
                    key={index}
                    className="item-carrito-header d-flex justify-content-between align-items-center"
                  >
                    <td className="d-flex align-items-center gap-2 gap-lg-2  ">
                      <img
                             className="img-carrito"
                        src={e.img}
                        alt={`${e.titulo}`}
                      />
                      <p className="fw-bold paragraph-font mb-0 paragraph-font text-secondary">{e.titulo}</p>
                      <p className='m-0'>x{e.cantidad}</p>
                      <p className=" paragraph-font mb-0">
                        {" "}
                        $
                        <span>{e.precio * e.cantidad}</span>
                      </p>
                    </td>

                    <td>
                    <a
                    href="#"
                    className="borrar-producto"
                    onClick={(id) => eliminarProductoCarritoContext(e.id)}
                  >
                    <i className="bi bi-trash-fill text-danger"></i>
                  </a>
                    </td>
    
                    
                  </div>
                )
            })
        }
      
      </div>
        {carrito.length == 0 ? "" : <Link className='align-self-center paragraph-font text-secondary' to="/carrito">Ir a comprar</Link>}
    </div>
  )
}
