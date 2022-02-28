import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalSearch from "../ModalSearch";

import {
  searchBox,
  moviesSideBar,
  posterMovies,
  posterInfo,
  infos,
  buttonSeeMore,
  nameAndGenres,
  voteMovie,
  sideMenuSearch
} from "./style.module.scss";
import { SearchRounded } from "@mui/icons-material";

export default function SideMenuSearch() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);


  return (
    <aside className={sideMenuSearch}>
      <div className={searchBox}>
        <button onClick={handleOpen}>
          <SearchRounded /> Search
        </button>
      </div>

      <div className={moviesSideBar}>
        <h2>Favorite movies</h2>
        <div className={posterMovies}>
          <div className={posterInfo}>
            <img
              src="https://image.tmdb.org/t/p/w154//mzezdUZEnpiUIlxpdyLO1R08Lqm.jpg"
              alt="poster"
            />
            <div className={infos}>
              <div className={nameAndGenres}>
                <h4>Eternos</h4>
                <p>Action, Adventure, Fiction</p>
              </div>
              <div className={voteMovie}>
                <p>5.5</p>
              </div>
            </div>
          </div>
          <div className={posterInfo}>
            <img
              src="https://image.tmdb.org/t/p/w154//mzezdUZEnpiUIlxpdyLO1R08Lqm.jpg"
              alt="poster"
            />
            <div className={infos}>
              <div className={nameAndGenres}>
                <h4>Eternos</h4>
                <p>Action, Adventure, Fiction</p>
              </div>
              <div className={voteMovie}>
                <p>5.5</p>
              </div>
            </div>
          </div>
          <div className={posterInfo}>
            <img
              src="https://image.tmdb.org/t/p/w154//mzezdUZEnpiUIlxpdyLO1R08Lqm.jpg"
              alt="poster"
            />
            <div className={infos}>
              <div className={nameAndGenres}>
                <h4>Eternos</h4>
                <p>Action, Adventure, Fiction</p>
              </div>
              <div className={voteMovie}>
                <p>5.5</p>
              </div>
            </div>
          </div>
        </div>
        <Link className={buttonSeeMore} to="/">
          See more
        </Link>
      </div>

      <ModalSearch 
        open={open}
        setOpen={setOpen}
      />
    </aside>
  );
}
