import React, { useState , useEffect} from 'react';
import HowItWorks from './HowItWorks';


const Hero = () => {        
    
    return (
        <div className="overflow-x-hidden bg-gray-50">


    <section className="pt-12 bg-gray-50 sm:pt-1">
        <div className="px-4  max-w-7xl sm:px-6 lg:px-8" >
            <div className="max-w-2xl mx-auto text-center" 
           >
            
                
                <div className='flex '>
                <p className="mt-1 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
                <span className="relative inline-flex sm:inline poppins-bold">
                        <span className="  w-full h-full absolute inset-0"></span>
                        <span className="relative mx-3 bg-gradient-to-r from-teal-500 to-emerald-200 bg-clip-text text-transparent poppins-bold "> Tiempos </span>
                    </span>
                   
                    cortos resultados
                    
                    <span className="relative inline-flex sm:inline">
                        <span className="bg-green blur-lg filter opacity-30 w-full h-full absolute inset-0 rounded-4xl m-1"></span>
                        <span className="relative mx-3 poppins-bold"> veloces </span>
                    </span>
                </p>
                
                <div className='my-3  '>
                <img src="../assets/vector.png" className="w-44 vector " alt="Vector" />
                </div>
                </div>
                <h1 className="px-6 my-10 text-lg font-bold text-gray-600 poppins-bold" >For <span className='text-green'>everyone.</span></h1>
                <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                    <a
                        href="#"
                        title=""
                        className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover"
                        role="button"
                    >
                        Explorar
                    </a>

                    
                
                </div>
         
                {/* <p className="mt-8 text-base text-gray-500 font-inter">60 Days free trial · No credit card required</p> */}
            </div>
        </div>

        <div className="pb-12 bg-white">
            <div className="relative">
                <div className="absolute inset-0 h-2/3 bg-gray-50"></div>
                <div className="relative mx-auto">
                    <div className="lg:max-w-6xl lg:mx-auto">
                    
                    </div>
                </div>
            </div>
        </div>
    </section>
  
     

</div>

    )
}
export default Hero;