/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { CalendarDaysIcon, LightBulbIcon } from '@heroicons/react/24/outline'
import IconCalendly from './IconCalendly'
export default function Contact() {
  return (
    <div className="relative isolate overflow-hidden my-20 sm:shadow-xl sm:rounded-xl bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl poppins-bold text-white sm:text-4xl">No te pierdas la oportunidad de empezar de escalar.</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300 poppins-semibold">
              Ingresando en Book a meeting , te podrás contactar con el equipo para empezar a crear o resolver tu proyecto. 
            </p>
            <div className='flex'>
            <a className="text-black my-10 flex gradient   text-sm rounded-md p-2 poppins-bold " href="https://calendly.com/jeremiasgonzalez/30min">
           <h2 className='text-dark'>Book a meeting</h2>  <div className="mx-2 mt-auto"><IconCalendly /></div> 
          </a>
          </div>
            {/* <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-green/10 focus:ring-2 focus:ring-inset focus:ring-green sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div> */}
            
          </div>
          
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 border border-green">
                <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 poppins-extrabold text-white">Book a meeting</dt>
              <dd className="mt-2 leading-7 poppins-semibold text-gray-400">

                ¿Listo para empezar? Agende una Reunión con Nosotros. <br />
                ¿Qué puede esperar de la reunión? <br />
                Analizaremos sus objetivos y necesidades específicas. <br />
                Responderemos cualquier pregunta que pueda tener sobre nuestros servicios y procesos. <br />
                Definiremos un plan de acción posterior.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="sm:rounded-md bg-white/5 p-2 border border-green">
                <LightBulbIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 poppins-extrabold text-white">Probá <span className='text-green'> Gratis </span> Nuestros Servicios</dt>
              <dd className="mt-2 leading-7 poppins-semibold text-gray-400">
              Nosotros creemos en la importancia de la confianza y la transparencia.
               Por eso, te ofrecemos
              la oportunidad de probar una versión demo gratuita de nuestros servicios.
               
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#2bb9a4] to-[#041b1e] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}
