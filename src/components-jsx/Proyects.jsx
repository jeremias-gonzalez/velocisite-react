import React from 'react';
import mockupGHTN from "../assets/intento7.png";
import mockupCA from "../assets/495shots_so.png";
import phoneCA from "../assets/849shots_so.png";
import crenagrologo from "../assets/crenagro.png"
const Proyects = () => {
  return (
    <div>
      <div className='sm:flex sm:px-10'>
        <div className='hidden sm:block floating'>
          <img src={mockupGHTN} alt="grupo hydro tecnova" />
        </div>
        <div className='sm:my-26 sm:mx-40'>
          <div className='mx-10'>
            <h1 className='poppins-bold sm:text-6xl text-2xl'>
              <span className='gruponova'>Grupo</span> Hyd<span className='hydro'>ro</span> <br />Tec<span className='gruponova'>nova</span>
            </h1>
          </div>
          <div className='my-10 mx-10'>
            <p className='poppins-semibold leading-5'>
              Un desafío simple, <br /> para una empresa comercializadora de grúas e hidrogrúas.<br />
              Con el objetivo de generar medianas ventas en la zona de Rio Cuarto y al rededores. <br />
              Con ayuda de <span className='facebook'>Meta</span> ADS el sitio tuvo mas alcance de lo esperado.
            </p>
          </div>
          <div className='sm:hidden floating'>
            <img src={mockupGHTN} alt="grupo hydro tecnova" />
          </div>
          <div className='mx-10 sm:my-36'>
            <a href="https://grupohydrotecnova.netlify.app/" target='_blank' className="text-sm poppins-extrabold leading-6 text-white">
              Explorar <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div className='sm:flex mt-20 sm:mt-1'>
        <div className='sm:my-26 sm:mx-20'>
          <div className='mx-10'>
            <img className='sm:w-full w-36' src={crenagrologo} alt="Crenagro" />
          </div>
          <div className='my-10 sm:mx-[1rem]'>
            <p className='poppins-semibold leading-5 mx-10'>
              El equipo CrenAgro ubicado en Rio IV , confió en nosotros. <br />
              LLegaron con una propuesta de diseño e implementacion de landing page  , con el objetivo de poder hacer 
              llegar a sus clientes de manera online.
              Nos solicitaron un chatbot para las FAQ´S y un link con un mensaje vía Whatsapp .
            </p>
          </div>
          <div className='sm:hidden floating'>
            <img className='w-44 ml-[6rem]' src={phoneCA} alt="crenagro" />
          </div>
          <div className='mx-20 my-10 sm:my-36'>
            <a href="https://crenagro.com.ar/" target='_blank' className="text-sm poppins-extrabold leading-6 text-white">
              Explorar <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        
          <img className=' hidden sm:block sm:w-7/12 sm:h-6/12 sm:ml-[4rem] sm:mt-[-5rem]' src={mockupCA} alt="Crenagro" />
       
      </div>
    </div>
  );
};


export default Proyects