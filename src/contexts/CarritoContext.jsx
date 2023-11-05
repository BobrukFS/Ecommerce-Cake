import { useLocalStorage } from "../hooks/useLocalStorage";

import { createContext, useState } from "react";

/* CREANDO CONTEXTO */

// ! 1er -> Creación del contexto
const CarritoContext = createContext()

// ! 2da -> El armado del Provider

const url = "http://localhost:3000/carrito"

const CarritoProvider = ( { children } ) => {
    // ESTADO
    const [ agregarAlCarrito, eliminarDelCarrito, vaciarCarrito, carrito ] = useLocalStorage('carrito', [])
    const [viejoCarrito, setCarrito] = useState(...carrito)
    function elProductoEstaEnElCarrito(producto) {
        return carrito.filter(prod => prod.id === producto.id).length // Me devuelve 0 si no hay producto en el carrito y 1 si hay
    }

    function obtenerProductoDeCarrito(producto) {
        return carrito.find(prod => prod.id === producto.id) // Me retorna si hay un producto en el carrito
    }
    
    const agregarCarritoContext = (producto) => {
        if (!elProductoEstaEnElCarrito(producto)) {
          producto.cantidad = 1;
          agregarAlCarrito(producto);
          const nuevoCarrito = [...carrito];
          setCarrito(nuevoCarrito);
        } else {
          const productoDeCarrito = obtenerProductoDeCarrito(producto);
          if (productoDeCarrito.cantidad < 9) {
            productoDeCarrito.cantidad++;
            const nuevoCarrito = [...carrito]; // Clonar el carrito actual
            setCarrito(nuevoCarrito); // Actualizar el estado del carrito en el contexto
            window.localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
          }
        }
      };

      const restarCarritoContext = (producto) => {
        if (!elProductoEstaEnElCarrito(producto)) {
          console.log("No se puede borrar");
        } else {
          const productoDeCarrito = obtenerProductoDeCarrito(producto);
          if (productoDeCarrito.cantidad > 1) {
            productoDeCarrito.cantidad--;
            const nuevoCarrito = [...carrito]; // Clonar el carrito actual
            setCarrito(nuevoCarrito); // Actualizar el estado del carrito en el contexto
            window.localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
          }
        }
      };

    const eliminarProductoCarritoContext = (id) => {
        eliminarDelCarrito(id)
        const nuevoCarrito = [...carrito]; // Clonar el carrito actual
        setCarrito(nuevoCarrito);
    }

    const guardarCarritoContext = () => {

    }

    const vaciarCarritoContext = () => {
        vaciarCarrito()
        const nuevoCarrito = [...carrito];
        setCarrito(nuevoCarrito);
    }

    const obtenerTotalCarrito = () =>{
        let total = 0;
        carrito.forEach((e)=>{
            total += parseInt(e.cantidad);
        })
        return total;
    }



    const data = {viejoCarrito, carrito, obtenerTotalCarrito, agregarCarritoContext, restarCarritoContext, eliminarProductoCarritoContext, guardarCarritoContext, vaciarCarritoContext}

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}


// ! 3era -> Exportaciones
export { CarritoProvider }

export default CarritoContext