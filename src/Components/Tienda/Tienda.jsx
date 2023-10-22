import React from 'react'
import Categorias from './Categorias/Categorias'
import Card from './Card/Card'
import { useEffect } from 'react'
import { useState } from 'react'
import useFetch from '../../custom-hook/useFetch'

function Tienda() {
    const {data} = useFetch("http://localhost:3000/pasteles");
    console.log(data);
  return (
    <>
    
        <div className="tienda row d-flex  justify-content-center align-items-center">
            <div className='row d-flex align-items-center justify-content-center bg-primary py-lg-4 py-4 px-5'>
                <h2 className='col-md-2 text-secondary  fs-1 text-center titles-font fw-bold my-0 p-0'>Tienda</h2>
                <div className='col-md-10 title-categoria d-flex align-items-center  justify-content-center'>
                    <span className='circulos'></span>
                    <span></span>
                    <h3 className='text-white fs-2 text-center titles-font fw-bold my-0 mx-2 mx-sm-3'>Todos</h3>
                    <span></span>
                    <span className='circulos'></span>
                </div>
                
            </div>
        <div className='row'>
            <div className='col-md-2'>
            <Categorias></Categorias>
            </div>
            <div className='d-flex col-md-10 flex-wrap row-gap-4 column-gap-4 justify-content-center my-5'>
              
            {data.map((elemento, index)=>{
                return <Card key={index} titulo={elemento.titulo} descripcion={elemento.descripcion} img={elemento.img} precio={elemento.precio} id={data.id}></Card>
              })
              
            } 
             
       

       
            </div>
        </div>
        </div>

    </>
  )
}

export default Tienda