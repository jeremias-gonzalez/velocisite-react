// Handlemode.js
import React from 'react';
import { useTheme } from './ThemeContext';
import Moon from "./Moon";
import Sun from "./Sun";

const Handlemode = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className="relative flex items-center cursor-pointer transform transition-transform duration-1000 rounded-full"
      onClick={toggleTheme}
    >
      {theme === 'dark' ? (
        <div>
          <Sun />
        </div>
      ) : (
        <div>
          <Moon />
        </div>
      )}
    </div>
  );
};

export default Handlemode;
