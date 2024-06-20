import Logo from './Logo'
import React , {useState , useRef} from 'react'
import Handlemode from './Handlemode'
import  {ThemeProvider} from "./ThemeContext"
import { NavLink } from 'react-router-dom';
const Navbar2 = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    toggleNav(); // Cerrar el menú después de hacer clic en un enlace
  };
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const servicesRef = useRef(null);
  const faqsRef = useRef(null);

  return (
    
    <ThemeProvider>
    <div>
      <header className="sm:fixed fixed flex flex-wrap sm:z-50 z-50 sm:justify-start sm:flex-nowrap w-full bg-white text-sm my-1 px-5 dark:bg-neutral-800">
        <nav
          className="sm:backdrop-blur-sm sm:bg-gray/30 dark:backdrop-blur-xl backdrop-blur-lg bg-gray/30 dark:rounded-xl rounded-xl mx-10 max-w-[85rem] w-full mx-auto px-4 py-3 sm:flex sm:py-3 sm:mx-10 sm:items-center sm:justify-between"
          aria-label="Global"
        >

          <div className="flex items-center justify-between">
            <div className="sm:hidden">
              <Handlemode />
            </div>
            <a className="flex-none text-xl font-semibold dark:text-white" href="#">
              <Logo />
            </a>

            <div className="flex sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10"
                onClick={toggleNav}
                aria-label="Toggle navigation"
              >
                <svg
                  className={`hs-collapse-open:hidden flex-shrink-0 size-6 ${isNavOpen ? 'block' : 'block'}`}
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
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className={`hs-collapse-open:block hidden flex-shrink-0 size-6 ${isNavOpen ? 'block' : 'hidden'}`}
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
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div
            id="navbar-collapse-with-animation"
            className={`hs-collapse ${isNavOpen ? 'block' : 'hidden'} overflow-hidden transition-all duration-300 basis-full grow sm:block`}
          >
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5 sm:mx-1">
              <div className="hidden sm:block">
                <Handlemode />
              </div>
              <NavLink
                className="poppins-semibold text-lg text-blue-500"
                to="/"
                aria-current="page"
                onClick={toggleNav}
              >
                Home
              </NavLink>
              <a
                className="poppins-semibold text-lg sm:text-green text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
                href='#about'
                onClick={toggleNav}
              >
                About
              </a>
              <a
                className="poppins-semibold text-lg text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
                href='#projects'
                onClick={toggleNav}
              >
                Work
              </a>
              <a
                className="poppins-semibold text-lg sm:text-green text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
                href='#services'
                onClick={toggleNav}
              >
                Services
              </a>
              <a
                className="poppins-semibold text-lg text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
                href='#faqs'
                onClick={toggleNav}
              >
                FAQ'S
              </a>
              <a
                className="poppins-semibold text-lg text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
                href='#contact'
                onClick={toggleNav}
              >
                Contact
              </a>
            </div>
          </div>

        </nav>
      </header>
    </div>
  </ThemeProvider>
  
  );
};
export default Navbar2;