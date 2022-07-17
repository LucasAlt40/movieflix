import React from "react";

import { Button } from "@mui/material";

import "./style.scss";
import Carousel from "../Carousel";
import { Link } from "react-router-dom";

export default function CatalogComponent({typeMedia = "movies"}) {
  return (
    <main className="catalog-container">
      <div className="filtro">
        <ul>
          <li>
            <Link to={"/tv"}>
              <Button variant={typeMedia === "tv" ? "contained" : "outlined"}>TV Series</Button>
            </Link>
          </li>
          <li>
            <Link to={"/movies"}>
              <Button variant={typeMedia === "tv" ? "outlined" : "contained"}>Movies</Button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="carousels-container">
        <Carousel movieUrlApi="movies-popular" typeMedia={typeMedia} movieCategory={typeMedia === "movies" ? "Popular Movies" : "Popular Tv Shows"} />
        <Carousel movieUrlApi="movies-now-playing" typeMedia={typeMedia} movieCategory={typeMedia === "movies" ? "Movies now playing" : "Tv Shows airing today"} />
        {typeMedia === "movies" ? (<Carousel movieUrlApi="movies-upcoming" movieCategory="Movies upcoming" />) : null}
        <Carousel movieUrlApi="movies-top-rated" typeMedia={typeMedia} movieCategory={typeMedia === "movies" ? "Top rated Movies" : "Top rated Tv Shows"} />
      </div>
    </main>
  );
}
