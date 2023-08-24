import React from 'react'
import Social from './Social/Social'
import AsideSection from './AsideSection/AsideSection'

function Footer() {
  return (<>
    <div className="footer container-fluid bg-secondary justify-content-between p-4 bot-0 position-relative d-lg-flex px-md-5 justify-content-lg-center ">
      <div className='row'>
  
      <div className='footer__intro mb-4 col-lg-4'>
        <p className='text-primary fs-3 m-0 titles-font'>Tiempo de Fantasia</p>
        <p className='text-white fs-6 m-0 paragraph-font w-100'>Somos una empresa de pasteles dedicados para todo tipo de eventos, realizamos productos de primera calidad</p>
      </div>
    <div className='footer__sections  justify-content-between align-items-center d-flex flex-column row-gap-5 flex-sm-row align-items-sm-start gap-sm-5 col-lg-8'>
      <AsideSection title={"Tiempo de Fantasia"} list={["Acerca de nosotros", "Contacto"]}></AsideSection>
      <AsideSection title={"Tienda"} list={["Comprar"]}></AsideSection>
      <AsideSection title={"Productos"} list={["Pasteles", "Tartas", "Muffins", "Galletitas"]}></AsideSection>
    </div>
    <div className='footer__contact d-flex justify-content-between mt-4 col-lg-12'>
      <Social></Social>
      <div className='d-flex  align-items-end '>
        <i className="bi bi-geo-alt-fill text-primary fs-5"></i>
        <p className='text-white m-0 ms-2 paragraph-font'>Calle 265 nº 2366, Quilmes</p>
      </div>
    
    </div>
          
    </div>
    </div>
  </>
  )
}

export default Footer