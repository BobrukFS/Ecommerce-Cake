import React from 'react'

const Categorias = () => {
  const categorias = ["Todos","Pasteles", "Galletitas", "Muffins"];
  return (
    <>
    <p className='fs-3'>Categorias</p>
    <ul>
        {categorias.map((element, index) => {
          return <li key={index}>{element}</li>
        })}
    </ul>
    </>
  )
}

export default Categorias