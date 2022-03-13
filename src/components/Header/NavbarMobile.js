import React, { useState } from 'react';
import { Link } from 'react-scroll';

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
import ContactMailIcon from '@mui/icons-material/ContactMail';

import './NavbarMobile.scss';

const NavbarMobile = ({ section, setSection }) => {
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
      setSectionValue: section,
      menuIcon: <HomeIcon />
    },
    {
      title: 'Sklep',
      toWaypoint: 'main',
      offsetValue: -70,
      setSectionValue: 'shop',
      menuIcon: <ShoppingCartIcon />
    },
    {
      title: 'Nasze gekony',
      toWaypoint: 'main',
      offsetValue: -70,
      setSectionValue: 'geckos',
      menuIcon: <PetsIcon />
    },
    {
      title: 'Informacje',
      toWaypoint: 'main',
      offsetValue: -70,
      setSectionValue: 'informations',
      menuIcon: <InfoIcon />
    },
    {
      title: 'O nas',
      toWaypoint: 'main',
      offsetValue: -70,
      setSectionValue: 'about',
      menuIcon: <PersonIcon />
    },
    {
      title: 'Kontakt',
      toWaypoint: 'footer',
      offsetValue: -70,
      setSectionValue: section,
      menuIcon: <ContactMailIcon />
    }
  ];

  const handleList = (item) => {
    setSection(item);
    setState({ top: false });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List className="list-container">
        {navData.map((item, index) => (
          <>
            <ListItem button className="list-item">
              <ListItemIcon>{item.menuIcon}</ListItemIcon>
              <ListItemText>
                <li key={item.title} className="list-li">
                  <Link
                    to={item.toWaypoint}
                    spy={true}
                    smooth={true}
                    offset={item.offsetValue}
                    duration={500}
                    onClick={() => handleList(item.setSectionValue)}>
                    {item.title}
                  </Link>
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
