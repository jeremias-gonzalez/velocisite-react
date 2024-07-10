import { PaintBrushIcon, ShoppingCartIcon, RocketLaunchIcon, CheckCircleIcon} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'E-commerce',
    description:
      'Diseño web previo a la implementacion de la plataforma ,Herramientas de análisis y gestion de inventarios, Integracion de Mercado Pago como sistema de pago , y logistica, Chatbot para preguntas frecuentes ',
    icon: ShoppingCartIcon,
  },
  {
    name: 'Landing Page PRO',
    description:
      'Mayor tasa de conversion , Diseño atractivo y centrado en el usuario , Implementacion de tecnicas SEO y marketing digital.Ademas contamos con la integracion de Chatbot para preguntas frecuentes ',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Design Web',
    description:
      'Diseño Profesional y Moderno, Mejora de la experiencia de usuario , Maquetado Responsive para smartphone,tablet y Desktop .',
    icon: PaintBrushIcon,
  },
  //  {
  //    name: 'Meta ADS',
  //    description:
  //      'Segmentación precisa de la audiendia , Analisis y optimización de campañas para maximizar el retorno de inversión (ROI) , Creatividad en anuncios para captar la atención del usuario, Informes detallados y métricas para medir el éxito de las campañas',
  //    icon:CheckCircleIcon,
  // },
]

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
            
          <h2 className="sm:text-5xl text-3xl text-center  poppins-bold leading-7 text-indigo-600">Nuestros Servicios</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            
          </p>
          {/* <p className="mt-6 poppins-semibold my-10 text-md leading-5 text-gray-600">
           
          </p> */}
          
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10  lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative rounded-xl dark:glass-dark glass p-5  pl-16">
                <dt className="text-base poppins-extrabold leading-7 text-gray-900">
                  <div className="absolute left-2 top-2 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-green" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base poppins-medium leading-5 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
