import { useState,useEffect } from "react";
import Moon from "./Moon";
import Sun from "./Sun";
import { toggle } from "@nextui-org/react";
const Handlemode = () => {
  const [theme, setTheme] = useState(() => {
    // Verifica si estamos en un entorno de navegador antes de acceder a window
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    // Por defecto, devuelve "light" si no se puede determinar el tema
    return "light";
  });

  // useEffect para manejar cambios en el tema oscuro
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (theme === "dark") {
        document.querySelector("html").classList.add("dark");
      } else {
        document.querySelector("html").classList.remove("dark");
      }
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div className="relative  flex items-center   cursor-pointer transform transition-transform duration-1000 rounded-full" onClick={handleChangeTheme}>
    {theme === 'dark' ? (
      <>
        
        <div>
          <Sun/>
        </div>
      </>
    ) : (
      <>
        <div >
        <Moon />
        </div>
      </>
    )}
  </div>
);
}

export default Handlemode