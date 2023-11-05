import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductosContext from "../../../contexts/ProductosContext";
import axios from 'axios'
export const ProductoEdit = ({ id, setVisible, actualizarProducto }) => {
  const { productos, actualizarProductoContext } = useContext(ProductosContext);
  const htmlElement = document.querySelector('html');
  const productoFiltrado = productos.filter((e) => e.id == id);
  const [titulo, setTitulo] = useState(undefined);
  const [descripcion, setDescripcion] = useState(undefined);
  const [precio, setPrecio] = useState(undefined);
  const [stock, setStock] = useState(undefined);

  const guardar = (e)=>{

    setVisible(false);
    htmlElement.style.overflow = "auto";
    const catalogo = document.getElementsByClassName('catalogo');
    const header = document.getElementsByClassName('header');
    header[0].classList.remove('blur-background');
    catalogo[0].classList.remove('blur-background');
    const objetoAGuardar = Object.assign({}, productoFiltrado[0], {
      "titulo" : titulo ||  productoFiltrado[0].titulo ,
      "descripcion" : descripcion  || productoFiltrado[0].descripcion ,
      "precio" :  precio  || productoFiltrado[0].precio ,
      "stock" : stock || productoFiltrado[0].stock  
    })
 
    actualizarProducto(objetoAGuardar);
  }

  const cerrarModal = (e) =>{
    
    setVisible(false);
    htmlElement.style.overflow = "auto";
    const catalogo = document.getElementsByClassName('catalogo');
    const header = document.getElementsByClassName('header');
    header[0].classList.remove('blur-background');
    catalogo[0].classList.remove('blur-background');
  }

 

  return (
    <div  className="producto-edit">
      {productoFiltrado &&
        productoFiltrado.map((e, index) => {
          return (
            <div  className="modal-edit rounded-3 py-3 px-3 bg-white d-flex flex-column justify-content-between" key={index}>
            
              <div className="d-flex flex-column gap-3" onClick={cerrarModal}>
              <i class="bi bi-x align-self-end fs-5"></i>
              <input onChange={(e) => setTitulo(e.target.value)}   onClick={(e) => e.stopPropagation()} className="titles-font fs-5 text-secondary px-2 border rounded-2 border-secondary" type="text" defaultValue={e.titulo} />
              <textarea onChange={(e) => setDescripcion(e.target.value)}  onClick={(e) => e.stopPropagation()} className="paragraph-font text-secondary px-2 rounded-2 border-secondary" type="text" defaultValue={e.descripcion} />
              <div className="d-flex flex-column gap-2">

              <div className="d-flex align-items-center gap-1">
                <label className="paragraph-font" htmlFor="">Precio:</label>
                <input onChange={(e) => setPrecio(e.target.value)}  onClick={(e) => e.stopPropagation()} className="precio-edit px-2 rounded-3 border border-secondary paragraph-font text-muted" type="number" defaultValue={e.precio} />
              </div>
              <div className="d-flex align-items-center gap-1">
                <label className="paragraph-font" htmlFor="">Stock:</label>
                <input onChange={(e) => setStock(e.target.value)}  onClick={(e) => e.stopPropagation()} className="stock-edit px-2 rounded-3 border border-secondary paragraph-font text-muted" type="number" defaultValue={e.stock} />
              </div>
              </div>
              </div>

              <button className="align-self-end bg-secondary text-white rounded-3 border-0 titles-font" onClick={guardar}>Guardar</button>
            </div>
          );
        })}
    </div>
  );
};
