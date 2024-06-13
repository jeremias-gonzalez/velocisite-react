import React from 'react'

const Proyects = () => {
  return (
    <div>
      <div className='flex px-100'>
      <div className=' floating'>
        <img src="../assets/intento7.png" alt="grupo hydro tecnova" />
       {/* <Spline scene="https://prod.spline.design/eSuK65aIGaGpWj1k/scene.splinecode" />  */}
       </div>
        <div className='my-26  mx-40'>
        <div className='mx-10'>
        <h1 className='poppins-bold text-6xl '> <span className='gruponova'>Grupo</span> Hyd<span className='hydro'>ro</span> <br />Tec<span className='gruponova'>nova</span></h1>
        </div>
        <div className='my-10 mx-10'>
          <p className=' poppins-semibold leading-5'>
            Un desafío simple, <br /> para una empresa comercializadora de grúas e hidrogrúas.<br /> 
            Con el objetivo de generar medianas ventas en la zona de Rio Cuarto y al rededores.  <br /> 
            Con ayuda de <span className='facebook'>Meta</span> ADS el sitio tuvo mas alcance de lo esperado.
            </p>
        </div>
        <div className='mx-10 my-36'>
        <a href="#" className="text-sm poppins-extrabold leading-6 text-white">
                  Explorar <span aria-hidden="true">→</span>
                </a>
        </div>
        </div>
    
    </div>
    </div>
  )
}

export default Proyects