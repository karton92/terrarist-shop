import React from 'react';
import './NavbarDesktop.scss';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

const NavbarDesktop = ({ section, setSection }) => {
  const navData = [
    {
      title: 'Home',
      toWaypoint: 'header',
      offsetValue: -100,
      path: '/'
    },
    {
      title: 'Sklep',
      toWaypoint: 'main',
      offsetValue: -70,
      path: '/shop'
    },
    {
      title: 'Nasze gekony',
      toWaypoint: 'main',
      offsetValue: -70,
      path: '/geckos'
    },
    {
      title: 'Informacje',
      toWaypoint: 'main',
      offsetValue: -70,
      path: '/informations'
    },
    {
      title: 'O nas',
      toWaypoint: 'main',
      offsetValue: -70,
      path: '/about'
    },
    {
      title: 'Kontakt',
      toWaypoint: 'footer',
      offsetValue: -70,
      path: '/'
    }
  ];

  return (
    <nav>
      <ul>
        {navData.map((item) => (
          <li key={item.title}>
            <ScrollLink
              to={item.toWaypoint}
              spy={true}
              smooth={true}
              offset={item.offsetValue}
              duration={500}>
              <Link to={item.path}>{item.title}</Link>
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarDesktop;
