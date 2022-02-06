import React, { useState } from "react";
import { SearchRounded } from "@mui/icons-material";

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
import { Box, Modal } from "@mui/material";
import { Link } from "react-router-dom";

export default function SideMenuSearch() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#e5e5e5e5",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

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

      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>Funcionou!</h1>
        </Box>
      </Modal>
    </aside>
  );
}
