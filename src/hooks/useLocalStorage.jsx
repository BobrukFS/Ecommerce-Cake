import { useState } from "react"

// useLocalStorage('carrito', [])
export const useLocalStorage = (clave, valorInicial = []) => {
    // Tiene que usar alguno de los hooks de REACT
    
    const getValorAlmacenado = () => {
        try {
            const valorAlamacenadoLS = window.localStorage.getItem(clave)
            return valorAlamacenadoLS ? JSON.parse(valorAlamacenadoLS) : valorInicial
        } catch (error) {
            console.error(`Error al obtener ${clave} del localStorage ${error}`)
            return valorInicial
        }
    }
    
    const [valorAlmacenado, setValorAlmacenado] = useState(getValorAlmacenado())

    const guardarValorLS = (valorNuevo) => { // valorNuevo => va a contener un producto = {}

        try {
            const nuevoValorAlmacenado = [...valorAlmacenado, valorNuevo]
            setValorAlmacenado(nuevoValorAlmacenado) // Cambiando el estado con el array que tenía más el nuevo producto
            window.localStorage.setItem(clave, JSON.stringify(nuevoValorAlmacenado)) // Guardo el nuevo array generado que tienen dentro el producto nuevo
            
        } catch (error) {
            console.error(`Error al guardar ${clave} del localStorage: ${error}`)
        }

    }

    const eliminarValorLS = (id) => {
        try {

            const nuevoValorAlmacenado = [...valorAlmacenado] // Estoy clonando el array original
            const indice = nuevoValorAlmacenado.findIndex(item => item.id === id)
            nuevoValorAlmacenado.splice(indice, 1)
            setValorAlmacenado(nuevoValorAlmacenado)
            window.localStorage.setItem(clave, JSON.stringify(nuevoValorAlmacenado))

        } catch (error) {
            console.error(`Error al eliminar el producto con el id: ${id} en ${clave} del localStorage ${error}`)
        }
    }

    const limpiarLS = () => {
        window.localStorage.clear()
        window.localStorage.setItem(clave, JSON.stringify(valorInicial))
        setValorAlmacenado(valorInicial)
    }


    return [ guardarValorLS, eliminarValorLS, limpiarLS, valorAlmacenado ]

}