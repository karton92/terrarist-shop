import React, { useState } from "react";
import { Link } from "react-scroll";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

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
    },
    {
      title: "Sklep",
      toWaypoint: "main",
      offsetValue: -70,
      setSectionValue: "shop",
    },
    {
      title: "Nasze gekony",
      toWaypoint: "main",
      offsetValue: -70,
      setSectionValue: "geckos",
    },
    {
      title: "Informacje",
      toWaypoint: "main",
      offsetValue: -70,
      setSectionValue: "informations",
    },
    {
      title: "O nas",
      toWaypoint: "main",
      offsetValue: -70,
      setSectionValue: "about",
    },
    {
      title: "Kontakt",
      toWaypoint: "footer",
      offsetValue: -70,
      setSectionValue: section,
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
          <ListItem button key={item.title} className="list-item">
            <ListItemIcon>
              {index % 2 === 0 ? (
                <InboxIcon style={{ fontSize: 30 }} />
              ) : (
                <MailIcon style={{ fontSize: 30 }} />
              )}
            </ListItemIcon>
            <ListItemText>
              <li className="list-li">
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
        ))}
        <ArrowBackIosNewRoundedIcon
          className="arrow-button"
          style={{ fontSize: 30 }}
          onClick={() => setOpen(false)}
        />
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={anchor}>
        <Button onClick={() => setOpen(true)}>
          <MenuOpenIcon style={{ fontSize: 50 }} className="mobile-button" />
        </Button>
        <Drawer anchor={anchor} open={open} onClose={() => setOpen(false)}>
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default NavbarMobile;
