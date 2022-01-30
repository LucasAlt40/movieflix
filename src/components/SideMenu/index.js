import React from "react";
import { Link } from "react-router-dom";

import {
  LocalMovies,
  Home as HomeIcon,
  Person,
  Dashboard,
  Settings,
} from "@mui/icons-material";

import { logo, menu, active, flixTitle } from "./style.module.scss";

export default function SideMenu(props) {
  const {
    activePageHome,
    activePageAbout,
    activePageCompleteCatalog,
    activePageSettings,
  } = props;

  return (
    <aside>
      <div className={logo}>
        <LocalMovies />
        <h1>
          MOVIE<span className={flixTitle}>FLIX</span>
        </h1>
      </div>

      <nav className={menu}>
        <h2>Menu</h2>
        <ul>
          <li className={activePageHome ? active : ""}>
            <Link to="/">
              <HomeIcon /> Home
            </Link>
          </li>
          <li className={activePageAbout ? active : ""}>
            <Link to="/">
              <Person /> About
            </Link>
          </li>
          <li className={activePageCompleteCatalog ? active : ""}>
            <Link to="/">
              <Dashboard /> Complete catalog
            </Link>
          </li>
        </ul>
      </nav>

      <footer>
        <h2>General</h2>
        <ul>
          <li className={activePageSettings ? active : ""}>
            <Link to="/">
              <Settings /> Settings{" "}
            </Link>
          </li>
        </ul>
      </footer>
    </aside>
  );
}
