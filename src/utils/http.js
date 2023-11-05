
// ! CRUD -> R:READ => GET 

export const get = async (url) => {
    try {
        const respuesta = await fetch(url) // objeto de respuesta
        console.log(respuesta)
        if (!respuesta.ok) {
            throw new Error(`Algo pago: ${respuesta.status} ${respuesta.statusText}`)
        }
        const data = await respuesta.json() // Acá tenemos el array de productos

        return data

    } catch (error) {
        console.log(`ERROR GET -> `, error)
    }
}

// ! CRUD -> C:CREATE => POST
// ! CRUD -> U:UPDATE => PUT
// ! CRUD -> D:DELETE => DELETE