import React, { useState } from 'react'
import { LoginRegister } from './LoginRegister/LoginRegister'

export const Login = () => {
    const [type, setType] = useState("Iniciar sesion")

  return (<div className='login row d-flex align-items-center'>
    <div className='col-12 col-lg-6 login__intro px-5 px-lg-5 d-flex flex-column align-items-start'>
        <h2 className='fs-1 text-primary  titles-font m-0'>Bienvenido a</h2>
        <p className='titles-font fs-2 text-secondary '>Sweet Cake</p>
        <p className='parrafo-login paragraph-font fs-5 fs-3'>La mejor tienda de pasteles del pais. Ahora envios en tu zona. Visita nuestra tienda</p>
        <img className='carita align-self-center' src="public/carita.png" alt="galletita" />
    </div>
    <LoginRegister type={type} setType={setType}></LoginRegister>
  </div>
   
  )
}
