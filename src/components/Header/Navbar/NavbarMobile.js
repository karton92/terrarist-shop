import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeSection, sectionValue } from '../../../redux/features/sectionSlice';

//Material UI
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

//ICONS
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PetsIcon from '@mui/icons-material/Pets';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

import './NavbarMobile.scss';

const NavbarMobile = ({ section, setSection }) => {
  const activePathRoute = useSelector(sectionValue);
  const dispatch = useDispatch();

  const anchor = 'top';
  const [state, setState] = useState({
    top: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const navData = [
    {
      title: 'Home',
      toWaypoint: 'header',
      offsetValue: -100,
      menuIcon: <HomeIcon />,
      path: { activePathRoute }
    },
    {
      title: 'Sklep',
      toWaypoint: 'main',
      offsetValue: -70,
      menuIcon: <ShoppingCartIcon />,
      path: 'shop'
    },
    {
      title: 'Nasze gekony',
      toWaypoint: 'main',
      offsetValue: -70,
      menuIcon: <PetsIcon />,
      path: 'geckos'
    },
    {
      title: 'Informacje',
      toWaypoint: 'main',
      offsetValue: -70,
      menuIcon: <InfoIcon />,
      path: 'informations'
    },
    {
      title: 'O nas',
      toWaypoint: 'main',
      offsetValue: -70,
      menuIcon: <PersonIcon />,
      path: 'about'
    },
    {
      title: 'Kontakt',
      toWaypoint: 'footer',
      offsetValue: -70,
      menuIcon: <EmailIcon />,
      path: { activePathRoute }
    }
  ];

  const handleState = (item) => {
    setState({ top: false });
    dispatch(changeSection(item));
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List className="list-container">
        {navData.map(({ title, toWaypoint, offsetValue, path, menuIcon }) => (
          <>
            <ListItem button className="list-item">
              <ListItemIcon>{menuIcon}</ListItemIcon>
              <ListItemText>
                <li key={title} className="list-li">
                  <ScrollLink
                    to={toWaypoint}
                    spy={true}
                    smooth={true}
                    offset={offsetValue}
                    duration={500}
                    onClick={() => handleState({ path })}>
                    <Link to={path}>{title}</Link>
                  </ScrollLink>
                </li>
              </ListItemText>
            </ListItem>
            <Divider />
            <hr />
          </>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuOpenIcon style={{ fontSize: 50 }} className="mobile-button" />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}>
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      }
    </div>
  );
};

export default NavbarMobile;
