import { useState } from "react";

import { Button } from "@mui/material";

import "./style.scss";
import Carousel from "../Carousel";
import { SearchRounded } from "@mui/icons-material";
import ModalSearch from "../ModalSearch";

// eslint-disable-next-line react/prop-types
export default function CatalogComponent() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const [typeMedia, setTypeMedia] = useState("movies");

  return (
    <main className="catalog-container">
      <div>
        <div className="filtro">
          <ul>
            <li>
              <Button variant={typeMedia === "tv" ? "contained" : "outlined"} onClick={() => setTypeMedia("tv")}>
                TV Series
              </Button>
            </li>
            <li>
              <Button variant={typeMedia === "tv" ? "outlined" : "contained"} onClick={() => setTypeMedia("movies")}>
                Movies
              </Button>
            </li>
          </ul>
        </div>
        <div className="searchBox">
          <button onClick={handleOpen}>
            <SearchRounded /> Search
          </button>
        </div>
      </div>
      <div className="carousels-container">
        <Carousel
          movieUrlApi="popular"
          typeMedia={typeMedia}
          movieCategory={
            typeMedia === "movies" ? "Popular Movies" : "Popular Tv Shows"
          }
        />
        <Carousel
          movieUrlApi="now-playing"
          typeMedia={typeMedia}
          movieCategory={
            typeMedia === "movies"
              ? "Movies now playing"
              : "Tv Shows airing today"
          }
        />
        {typeMedia === "movies" ? (
          <Carousel
            movieUrlApi="upcoming"
            typeMedia={typeMedia}
            movieCategory="Movies upcoming"
          />
        ) : null}
        <Carousel
          movieUrlApi="top-rated"
          typeMedia={typeMedia}
          movieCategory={
            typeMedia === "movies" ? "Top rated Movies" : "Top rated Tv Shows"
          }
        />
      </div>
      <ModalSearch open={open} setOpen={setOpen} typeMedia={typeMedia} />
    </main>
  );
}
