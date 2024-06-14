
export default function About() {
 
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 sm:shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute right-1/2  top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#2bb9a4" />
                  <stop offset={1} stopColor="#2bb9a4" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold sm:tracking-tight text-white sm:text-4xl poppins-bold">
                About
                <br />
                <span className="text-green">#</span> Team velocisite
              </h2>
              <p className="mt-6 text-md leading-5 text-gray-300 poppins-bold">
               Somos una startup <span className="text-green">Argentina</span> ubicada en Córdoba, Rio IV, dedicada a diseñar e implementar soluciones de software.
               El team te asegura la mejor calidad<span className="text-green"> DEMO</span> sin costos y sin limites para demostrarte que podemos.   
                </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
               
                <a href="#" className="text-sm font-semibold leading-6 text-white">
                  How it works? <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="relative sm:mx-10 sm:my-16 mx-5 my-16 mt-16 h-80 lg:mt-8">
              <img
                className="absolute sm:w-[36rem] sm:h-[36rem] w-[20rem] h-[20rem]   max-w-none sm:rounded-xl rounded-xl bg-white/5 "
                src="https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg"
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  