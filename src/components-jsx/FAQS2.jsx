import React from 'react'
import { useState } from 'react';
const FAQS2 = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqs = [
    {
      question: '¿Qué servicios de diseño web ofrecen?',
      answer:
        'Ofrecemos una amplia gama de servicios de diseño web, que incluyen la creación de sitios web personalizados, diseño de interfaces de usuario (UI), experiencia de usuario (UX), diseño responsivo para dispositivos móviles, y rediseño de sitios web existentes. Nuestro objetivo es crear sitios web visualmente atractivos, funcionales y optimizados para la mejor experiencia del usuario.',
    },
    {
      question: '¿Cómo puedo saber si necesito un sitio web de e-commerce?',
      answer:
        'Si vendes productos o servicios y deseas expandir tu alcance a una audiencia más amplia, un sitio web de e-commerce es ideal para ti. Este tipo de sitio te permite gestionar inventarios, procesar pagos de manera segura y ofrecer una experiencia de compra en línea conveniente para tus clientes. Si no estás seguro, te ofrecemos una consulta gratuita para evaluar tus necesidades específicas y recomendar la mejor solución.',
    },
    {
      question: '¿Qué tecnologías utilizan para el desarrollo front-end?',
      answer:
        'Utilizamos las tecnologías más avanzadas y actualizadas para el desarrollo front-end actualmente, incluyendo frameworks React Js, Next JS, Tailwind CSS. Estas herramientas nos permiten crear interfaces interactivas, rápidas y con un diseño moderno que se adapta a las necesidades de tus usuarios.',
    },
    {
      question: '¿Cuánto tiempo tarda en completarse un proyecto web?',
      answer:
        'La duración de un proyecto web puede variar según la complejidad y el alcance del mismo. Un sitio web básico puede tomar de 1 a 2 semanas, mientras que un sitio de e-commerce o una solución más personalizada pueden requerir de 3 a 4 semanas o más. Durante nuestra consulta inicial, te proporcionaremos un cronograma estimado basado en tus requisitos específicos.',
    },
  ];

  return (
    <div className="sm:mx-5 md:mx-10 lg:mx-20 px-5">
      <div>
        <h1 className="poppins-extrabold text-center text-2xl sm:text-4xl">
          Preguntas Frecuentes
        </h1>
        <h2 className="poppins-bold text-center text-sm my-5 text-green">FAQ'S</h2>
      </div>
      <div className="hs-accordion-group">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`hs-accordion bg-white rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent ${
              activeAccordion === index ? 'hs-accordion-active:border-gray-200 active' : ''
            }`}
            id={`accordion-${index}`}
          >
            <button
              className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
              onClick={() => toggleAccordion(index)}
              aria-controls={`collapse-${index}`}
              aria-expanded={activeAccordion === index ? 'true' : 'false'}
            >
              <p className="poppins-bold">{faq.question}</p>
              <svg
                className={`hs-accordion-active:hidden block size-3.5 ${
                  activeAccordion === index ? 'hidden' : 'block'
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              <svg
                className={`hs-accordion-active:block hidden size-3.5 ${
                  activeAccordion === index ? 'block' : 'hidden'
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
              </svg>
            </button>
            <div
              id={`collapse-${index}`}
              className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
                activeAccordion === index ? 'block' : 'hidden'
              }`}
              aria-labelledby={`accordion-${index}`}
            >
              <div className="pb-4 px-5">
                <p className="text-gray-800 poppins-medium p-3 text-sm dark:text-neutral-200">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


  )
}

export default FAQS2