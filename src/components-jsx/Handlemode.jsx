import { useStateuseEffect } from "react";
import Moon from "./Moon";
import Sun from "./Sun";
const Handlemode = () => {
    const [theme, setTheme] = useState(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          return "dark";
        }
    
        return "light";
      });
    
      useEffect(() => {
        if (theme === "dark") {
          document.querySelector("html").classList.add("dark");
        } else {
          document.querySelector("html").classList.remove("dark");
        }
      }, [theme]);
    
      const handleChangeTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
      };
  return (
    <div><button onClick={toggleDarkMode} className="text-gray-600 dark:text-gray-300">
    {darkMode ? <Moon /> : <Sun />}
  </button></div>
  )
}

export default Handlemode