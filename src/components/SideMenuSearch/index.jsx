/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import ModalSearch from "../ModalSearch";

import "./style.scss";
import { SearchRounded } from "@mui/icons-material";

const SideMenuSearch = ({ typeMedia }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  return (
    <aside className={"containerSideMenu"}>
      <div className={"searchBoxSideMenu"}>
        <button onClick={handleOpen}>
          <SearchRounded /> Search
        </button>
      </div>

      <div className={"moviesSideBarSideMenu"}>
        <h2>Favorite movies</h2>
        <div className={"posterMoviesSideMenu"}>
          <div className={"posterInfoSideMenu"}>
            <img
              src="https://image.tmdb.org/t/p/w154//mzezdUZEnpiUIlxpdyLO1R08Lqm.jpg"
              alt="poster"
            />
            <div className={"infosSideMenu"}>
              <div className={"nameAndGenresSideMenu"}>
                <h4>Eternos</h4>
                <p>Action, Adventure, Fiction</p>
              </div>
              <div className={"voteMovieSideMenu"}>
                <p>5.5</p>
              </div>
            </div>
          </div>
          <div className={"posterInfoSideMenu"}>
            <img
              src="https://image.tmdb.org/t/p/w154//mzezdUZEnpiUIlxpdyLO1R08Lqm.jpg"
              alt="poster"
            />
            <div className={"infosSideMenu"}>
              <div className={"nameAndGenresSideMenu"}>
                <h4>Eternos</h4>
                <p>Action, Adventure, Fiction</p>
              </div>
              <div className={"voteMovieSideMenu"}>
                <p>5.5</p>
              </div>
            </div>
          </div>
          <div className={"posterInfoSideMenu"}>
            <img
              src="https://image.tmdb.org/t/p/w154//mzezdUZEnpiUIlxpdyLO1R08Lqm.jpg"
              alt="poster"
            />
            <div className={"infosSideMenu"}>
              <div className={"nameAndGenresSideMenu"}>
                <h4>Eternos</h4>
                <p>Action, Adventure, Fiction</p>
              </div>
              <div className={"voteMovieSideMenu"}>
                <p>5.5</p>
              </div>
            </div>
          </div>
        </div>
        <Link className={"buttonSeeMoreSideMenu"} to="/">
          See more
        </Link>
      </div>

      <ModalSearch open={open} setOpen={setOpen} typeMedia={typeMedia} />
    </aside>
  );
};

export default SideMenuSearch;
