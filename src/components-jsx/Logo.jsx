// Logo.js
import React from 'react';
import { useTheme } from './ThemeContext';

const Logo = () => {
  const { theme } = useTheme();

  return (
    <div>
      <img
        id="logo"
        className='w-28'
        src={theme === "dark" ? './src/assets/logov2-removebg-preview.png' : './src/assets/logo-light.png'}
        alt="logo"
      />
    </div>
  );
};

export default Logo;
