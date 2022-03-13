import React from 'react';
import './Header.scss';
import Navbar from './Navbar/Navbar';
import Slider from './Slider';

const Header = () => {
  return (
    <header className="header" id="header">
      <Navbar />
      <Slider />
    </header>
  );
};

export default Header;
