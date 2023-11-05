import { useEffect } from "react"
import { useState } from "react"
import { createContext } from "react"
import useFetch from "../hooks/useFetch"
import { get } from "../utils/http"
import axios from "axios";
/* Creando CONTEXTO */

/* 1er -> Creación del contexto */
const ProductosContext = createContext()
/* 2do -> El armado del Provider */
const url = import.meta.env.VITE_ENDPOINT_PRODUCTOS


const ProductosProvider = ( { children } ) => {
    const [productos, setProductos] = useState(null)
    const {data} = useFetch(url);
    useEffect(() => {
        if(data){
            try {
                setProductos(data);
            } catch (error) {
                console.log(`[obtenerProductos] -> Algo no funcionó -> ${error}`)
            }
        }
   
    }, [data]) // Array de referencias vacío. Esto se ejecuta una sola vez.
   

    // ! POST => CREACIÓN DE PRODUCTOS
    const crearProductoContext = async (productoNuevo) => {
        try {
          const response = await axios.post(url, productoNuevo);
          console.log(response);
          if (response.status === 201) {
            // Producto creado exitosamente
            // Actualizar el estado de productos con el nuevo producto agregado
            setProductos([...productos, response.data]);
          } else {
            // Manejar el error en caso de que la solicitud no sea exitosa
            console.error("Error al crear el producto");
          }
        } catch (error) {
          console.error("Error al crear el producto", error);
        }
      };

    // ! PUT => EDICIÓN DE PRODUCTOS
    const actualizarProductoContext = async (productoAEditar) => {
        try {
    
          const response = await axios.put(`${url}/${productoAEditar.id}`, productoAEditar);
        
          if (response.status === 200) {
            // Producto creado exitosamente
            // Actualizar el estado de productos con el nuevo producto agregado
            setProductos(
                productos.map((producto) =>
                  producto.id === productoAEditar.id ? productoAEditar : producto
                )
              );
          } else {
            // Manejar el error en caso de que la solicitud no sea exitosa
            console.error("Error al actualizar el producto");
          }
        } catch (error) {
          console.error("Error al actualizar el producto", error);
        }
      };

    // ! DELETE => ELIMINAR PRODUCTOS
    const eliminarProductoContext = async (id) => {
        try {
            const response = await axios.delete(`${url}/${id}`);
            if(response.status === 200){
                setProductos(productos.filter((producto) => producto.id !== id))
            }
        }catch(error){
            console.error("Error al eliminar el producto", error);
        }
    }


    const datas = { productos, crearProductoContext, actualizarProductoContext, eliminarProductoContext }

    return <ProductosContext.Provider value={datas}>{children}</ProductosContext.Provider>
}


/* 3er -> Exportaciones */
export { ProductosProvider }

export default ProductosContext