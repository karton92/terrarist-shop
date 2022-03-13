import React from 'react';
import './Navbar.scss';
import logo2 from '../../../images/logo2.png';
import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';
import Icons from '../Icons';

const Navbar = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  const handleNavbar = () => {
    if (isMobile) {
      return <NavbarMobile />;
    }
    return <NavbarDesktop />;
  };

  return (
    <div className="navbar">
      <Link
        className="logo-container"
        to="header"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}>
        <img className="logo" src={logo2} alt="logo" />
      </Link>
      <div>{handleNavbar()}</div>
      <Icons />
    </div>
  );
};

export default Navbar;
