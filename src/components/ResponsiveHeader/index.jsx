import {
  LocalMovies,
  MenuSharp,
  Home as HomeIcon,
  Person,
  Dashboard,
  Settings,
  Favorite,
} from "@mui/icons-material";
import { Button, Menu, MenuItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

export default function ResponsiveHeader() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const styleMenuItems = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    color: "#000",
  };
  return (
    <header>
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MenuSharp />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>
            <Link
              style={styleMenuItems}
              to="/"
            >
              <HomeIcon /> Home
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              style={styleMenuItems}
              to="/"
            >
              <Person /> About
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              style={styleMenuItems}
              to="/"
            >
              <Dashboard /> Complete catalog
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              style={styleMenuItems}
              to="/"
            >
              <Settings /> Settings
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              style={styleMenuItems}
              to="/"
            >
              <Favorite /> Favorites
            </Link>
          </MenuItem>
        </Menu>
      </div>
      <div className="logo">
        <LocalMovies />
        <h1>
          MOVIE<span className="flixTitle">FLIX</span>
        </h1>
      </div>
    </header>
  );
}
