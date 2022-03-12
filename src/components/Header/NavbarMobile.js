import React, { useState } from "react";
import { Link } from "react-scroll";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
//ICONS
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PetsIcon from "@mui/icons-material/Pets";
import InfoIcon from "@mui/icons-material/Info";
import PersonIcon from "@mui/icons-material/Person";
import ContactMailIcon from "@mui/icons-material/ContactMail";

import "./NavbarMobile.scss";
//TEST
const NavbarMobile = ({ section, setSection }) => {
  const [open, setOpen] = useState(false);

  const anchor = "top";

  const navData = [
    {
      title: "Home",
      toWaypoint: "header",
      offsetValue: -100,
      setSectionValue: section,
      menuIcon: <HomeIcon />,
    },
    {
      title: "Sklep",
      toWaypoint: "main",
      offsetValue: -70,
      setSectionValue: "shop",
      menuIcon: <ShoppingCartIcon />,
    },
    {
      title: "Nasze gekony",
      toWaypoint: "main",
      offsetValue: -70,
      setSectionValue: "geckos",
      menuIcon: <PetsIcon />,
    },
    {
      title: "Informacje",
      toWaypoint: "main",
      offsetValue: -70,
      setSectionValue: "informations",
      menuIcon: <InfoIcon />,
    },
    {
      title: "O nas",
      toWaypoint: "main",
      offsetValue: -70,
      setSectionValue: "about",
      menuIcon: <PersonIcon />,
    },
    {
      title: "Kontakt",
      toWaypoint: "footer",
      offsetValue: -70,
      setSectionValue: section,
      menuIcon: <ContactMailIcon />,
    },
  ];

  const handleList = (item) => {
    setSection(item);
    setOpen(false);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={() => setOpen(false)}
      onKeyDown={() => setOpen(false)}
    >
      <List className="list-container">
        {navData.map((item, index) => (
          <>
            <ListItem button className="list-item">
              <ListItemIcon>
                {item.menuIcon}
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText>
                <li key={item.title} className="list-li">
                  <Link
                    style={{ color: `rgba(255, 255, 255, 0.8)`, fontSize: 20 }}
                    to={item.toWaypoint}
                    spy={true}
                    smooth={true}
                    offset={item.offsetValue}
                    duration={500}
                    onClick={() => handleList(item.setSectionValue)}
                  >
                    {item.title}
                  </Link>
                </li>
              </ListItemText>
            </ListItem>
            <Divider />
          </>
        ))}
        <div className="arrow-button">
          <ArrowBackIosNewRoundedIcon
            style={{ fontSize: 30 }}
            onClick={() => setOpen(false)}
          />
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={anchor}>
        <Button onClick={() => setOpen(true)}>
          <MenuOpenIcon style={{ fontSize: 50 }} className="mobile-button" />
        </Button>
        <SwipeableDrawer
          anchor={anchor}
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
        >
          {list(anchor)}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
};

export default NavbarMobile;
