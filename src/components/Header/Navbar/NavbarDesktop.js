import React from 'react';
import './NavbarDesktop.scss';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeSection, sectionValue } from '../../../redux/features/sectionSlice';

const NavbarDesktop = () => {
  const activePathRoute = useSelector(sectionValue);
  const dispatch = useDispatch();

  const navData = [
    {
      title: 'Home',
      toWaypoint: 'header',
      offsetValue: -100,
      path: { activePathRoute }
    },
    {
      title: 'Sklep',
      toWaypoint: 'main',
      offsetValue: -70,
      path: 'shop'
    },
    {
      title: 'Nasze gekony',
      toWaypoint: 'main',
      offsetValue: -70,
      path: 'geckos'
    },
    {
      title: 'Informacje',
      toWaypoint: 'main',
      offsetValue: -70,
      path: 'informations'
    },
    {
      title: 'O nas',
      toWaypoint: 'main',
      offsetValue: -70,
      path: 'about'
    },
    {
      title: 'Kontakt',
      toWaypoint: 'footer',
      offsetValue: -70,
      path: { activePathRoute }
    }
  ];

  return (
    <nav>
      <ul>
        {navData.map(({ title, toWaypoint, offsetValue, path }) => (
          <li key={title}>
            <ScrollLink
              to={toWaypoint}
              spy={true}
              smooth={true}
              offset={offsetValue}
              duration={500}
              onClick={() => {
                dispatch(changeSection({ path }));
              }}>
              <Link to={path}>{title}</Link>
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarDesktop;
