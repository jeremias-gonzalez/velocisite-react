import React from 'react';
import { useTheme } from './ThemeContext';
import darkLogo from '../assets/logov2-removebg-preview.png';
import lightLogo from '../assets/logo-light.png';

const Logo = () => {
  const { theme } = useTheme();

  return (
    <div>
      <img
        id="logo"
        className='w-28'
        src={theme === "dark" ? darkLogo : lightLogo}
        alt="logo"
      />
    </div>
  );
};

export default Logo;
