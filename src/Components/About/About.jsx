import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'

function About() {
  const {theme} = useContext(ThemeContext);
  return (
    <>
    <div className="about container-fluid  py-md-4 py-lg-5  ">
        <div className='about__desc d-flex flex-column justify-content-end p-3'>
          <div className='px-3 px-lg-5'>
      
            <h2 className='fs-1 titles-font text-white fw-bold border  border-3 border-secondary border-top-0 border-bottom-0 border-end-0  px-3'>Sobre nosotros</h2>
            <p className='paragraph-font fs-5 text-white'>Nuestro objetivo es ofrecer manualidades exquisitas y originales que hagan que tus momentos sean inolvidables.</p>
          
            </div>
        </div>
        <div className={`${theme === 'light' ? 'bg-white' : 'bg-secondary'} about__main  row d-flex px-md-4 px-lg-5 `}>
          <div className=' justify-content-center col-md-5 d-flex gap-4'>
            <img className='about__img  ' src="./about2.png" alt="" />
            <img className='about__img  ' src="./about3.png" alt="" />       
          </div>
            <div className='col-md-5 py-1 mb-5 '>
 
                <p className={`paragraph-font my-2 fs-6 ${theme === 'light' ? 'text-secondary' : 'text-white'}`}>En Tiempo de Fantasia, nos especializamos en ofrecer manualidades personalizadas para una amplia variedad de eventos.</p>
                <p className={`paragraph-font fs-6 mb-4 ${theme === 'light' ? 'text-secondary' : 'text-white'}`}>Ya sea un cumpleaños, un bautismo, un casamiento o comunion, nos esforzamos por crear piezas unicas y significativas que se adapten perfectamente a cada ocasion. Nos complace ser parte de tus momentos mas especiales y convertirlos en recuerdos eternos.</p>
                <a  className="w-100 position-relative bg-primary  align-self-start intro__btn btn1 text-danger border border-danger fw-bold titles-font rounded-pill fs-6  px-sm-4  px-lg-5">¡Visitar tienda!</a>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default About