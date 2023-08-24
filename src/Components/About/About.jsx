import React from 'react'

function About() {
  return (
    <>
    <div className="about container-fluid p-md-4 p-lg-5">
        <div>
            <h2 className='fs-1 titles-font text-secondary fw-bold'>Sobre nosotros</h2>
            <p className='paragraph-font fs-5'>Nuestro objetivo es ofrecer manualidades exquisitas y originales que hagan que tus momentos sean inolvidables</p>
        </div>
        <div className='row d-flex align-items-start'>
            <img className='my-4 my-lg-0 col-lg-6' src="assets/about.png" alt="" />
            <div className='col-lg-6 py-4'>
 
                <p className='paragraph-font fs-5'>En Tiempo de Fantasia, nos especializamos en ofrecer manualidades personalizadas para una amplia variedad de eventos.</p>
                <p className='paragraph-font fs-5'>Ya sea un cumpleaños, un bautismo, un casamiento o comunion, nos esforzamos por crear piezas unicas y significativas que se adapten perfectamente a cada ocasion. Nos complace ser parte de tus momentos mas especiales y convertirlos en recuerdos eternos.</p>
                <a className=" w-100 bg-primary position-relative  align-self-start intro__btn btn1 text-danger border border-danger fw-bold titles-font rounded-pill fs-5">¡Visitar tienda!</a>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default About