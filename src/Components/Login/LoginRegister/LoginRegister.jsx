import React from 'react'

export const LoginRegister = ({type, setType}) => {
    
    const cambiarForm = () =>{
        type == "Iniciar sesion" ? setType("Registrarse") : setType("Iniciar sesion")
    }

  return (<>
    <div className=' d-flex flex-column col-12 col-lg-6 bg-primary container-fluid loginRegister px-4 px-lg-5'>
        <div>
            <h2 className='fs-1 text-white titles-font'>{type}</h2>
            <p className='text-white fs-4 paragraph-font'>Ingrese sus credenciales para {type == "Iniciar sesion" ?  "iniciar sesion" :  "crear su cuenta"}</p>
        </div>
        <form action="" className='d-flex flex-column gap-4'>
            {type == "Iniciar sesion" ? "" :
                <div className='d-flex flex-column gap-2'>
                <label className='d-block fs-5 text-secondary paragraph-font' htmlFor="">Nombre completo</label>
                <input className='border border-2 border-white bg-primary rounded-3 w-100 px-2 py-2' placeholder='Escriba aqui su nombre' type="text" />
                </div>
            }
        
            <div className='d-flex flex-column gap-2'> 
            <label className='d-block fs-5 text-secondary paragraph-font' htmlFor="">Correo electronico</label>
            <input className='border border-2 border-white bg-primary rounded-3 w-100 px-2 py-2' placeholder='Escriba aqui su correo electronico' type="text" />
            </div>

            <div className='d-flex flex-column gap-2'>
            <label className='d-block fs-5 text-secondary paragraph-font' htmlFor="">Contraseña</label>
            <input className='border border-2 border-white bg-primary rounded-3 w-100 px-2 py-2' placeholder='Escriba aqui su contraseña' type="password" />
            </div>

            <button className="z-4 w-auto position-relative  align-self-center  btn1 text-danger border border-danger fw-bold titles-font fs-5 px-sm-4  px-lg-5  ">Registrarse</button>
            <p className='border-0 bg-primary text-white align-self-center fw-bold paragraph-font' onClick={cambiarForm}>¿No tienes cuenta? <span className='text-danger paragrap-font'>Inicia sesion.</span></p>
            
        </form>
   
    </div>
    
    </>)
}
