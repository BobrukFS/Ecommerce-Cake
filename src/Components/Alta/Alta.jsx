import React, { useContext, useEffect, useState } from 'react'
import { ProductoAlta } from './ProductoAlta/ProductoAlta'
import ProductosContext from '../../contexts/ProductosContext'
import Categorias from '../Tienda/Categorias/Categorias'
import { ProductoEdit } from './ProductoEdit/ProductoEdit'
export const Alta = () => {
    const { productos, crearProductoContext, eliminarProductoContext, actualizarProductoContext } = useContext(ProductosContext)
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");
    const [productosSinFiltrar, setProductosSinFiltrar] = useState([]);
    const [id, setId] = useState(0);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
      if (productos) {
        setProductosSinFiltrar(productos);
      }
    }, [productos, visible]);
  
    const productosFiltrados =
      categoriaSeleccionada === "Todos"
        ? productosSinFiltrar
        : productosSinFiltrar.filter(
            (producto) => producto.categoria === categoriaSeleccionada
          );
      
      const productoDefault = {
        "titulo" : "Escribe aqui un titulo",
        "descripcion" : "Escribe aqui una descripcion",
        "precio" : 0,
        "stock" : 0,
        "img" : "public/Sliced.png"
      }

      const addProducto = ()=>{
        crearProductoContext(productoDefault)
      }

      const eliminarProducto = (id)=>{
        eliminarProductoContext(id);
      }

      const actualizarProducto = (objetoAEditar) =>{
        actualizarProductoContext(objetoAEditar)
      }

  return (<div>
    <div className='catalogo py-5 px-4 z-4'>
      <h2 className='fs-1 text-secondary titles-font px-5 fw-bold'>Catalogo de productos</h2>
      <div className='d-flex flex-column flex-sm-row'>
    
      <div className="col-sm-2 d-md-flex flex-column align-items-center">
            <Categorias
              setCategoriaSeleccionada={setCategoriaSeleccionada}
              categoriaSeleccionada={categoriaSeleccionada}
            ></Categorias>
          </div>
      <div>
        <div className='d-flex flex-wrap gap-4 justify-content-center my-5 position-relative'>
            {productosFiltrados.map((producto, index)=>{
                return (<ProductoAlta
                key={index}
                titulo={producto.titulo}
                descripcion={producto.descripcion}
                img={producto.img}
                precio={producto.precio}
                id={producto.id}
                stock={producto.stock}
                setId={setId}
                setVisible={setVisible}
                eliminarProducto={eliminarProducto}
              ></ProductoAlta>)
            })} 

            <div onClick={addProducto} className='bg-primary text-white producto-alta-add d-flex align-items-center justify-content-center'>
            <i class="bi bi-plus-lg more"></i>
            </div>
            
        </div>
        </div>
      </div>
   
    </div>
       {visible ? <ProductoEdit id={id} setVisible={setVisible} actualizarProducto={actualizarProducto}></ProductoEdit> : ""}
       </div>)
}
