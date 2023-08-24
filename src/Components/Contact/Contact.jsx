import React from 'react'

function Contact() {
  return (
    <>
    <div className="contact  px-2 m-0 bg-primary w-100 row">
        <div className='col-lg-6'>
        <p className='text-secondary fs-5 m-0 paragraph-font'>Realiza tu pedido</p>
        <h2 className='fw-bold text-white fs-1 titles-font'>Contactanos</h2>
        <form className='px-2 '>
            <p className=' px-2 text-white paragraph-font'>Envianos un mensaje comentandonos lo que buscas y te pasamos un presupuesto acorde</p>
            <input className="bg-primary px-2 my-2 fs-5 paragraph-font w-100 border-0 border-bottom border-secondary border-1 " type="text" placeholder='Nombre' />
            <input  className="bg-primary px-2 my-2 fs-5 paragraph-font w-100 border-0 border-bottom border-secondary border-1 " type="text" placeholder='Email'/>
            <textarea  className="bg-white px-2 my-2 fs-5 paragraph-font w-100  border-secondary border-1 rounded-2 " type="text" placeholder='Asunto'/>
            <div>
                <button className=" w-100 position-relative bg-primary  align-self-start intro__btn btn1 text-danger border border-danger fw-bold titles-font rounded-4 fs-6">¡Visitar tienda!</button>
            </div>
            
        </form>
                
        </div>
        <div className='bg-primary col-lg-6'>
            <div>
                <p className='text-secondary fw-bold m-0 mt-4'>Opening hours</p>
                <p className='text-white'>Monday-Friday 9am - 12pm Weekend closed</p>
            </div>

            <div>
                <p className='text-secondary fw-bold m-0 mt-4'>Opening hours</p>
                <p className='text-white'>Monday-Friday 9am - 12pm Weekend closed</p>
            </div>

            <div>
                <p className='text-secondary fw-bold m-0 mt-4'>Opening hours</p>
                <p className='text-white'>Monday-Friday 9am - 12pm Weekend closed</p>
            </div>
   
        </div>
    </div>
    </>
  )
}

export default Contact