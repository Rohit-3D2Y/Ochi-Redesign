// Navbar.jsx
import React from 'react';
import Toggle from './Toggle/Toggle';

const Navbar = ({ toggleDarkMode }) => {
  const handleToggle = () => {
    toggleDarkMode();
  }
  return (
    <div className='navbar fixed z-[999] w-full flex justify-between items-center px-10 py-4'>
      <div className='logo font-bold text-2xl'>Rohit.Infotech</div>
      <div className='relative flex items-center justify-end w-[50%] gap-10 text-sm'>
        <a>Services</a>
        <a>Our Work</a>
        <a>About Us</a>
        <a>Insights</a>
        <Toggle clickEvent ={handleToggle} />
      </div>
      <div>Contact Us</div>
    </div>
  );
};

export default Navbar;
