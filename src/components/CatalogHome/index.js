import React from "react";

import { Button } from "@mui/material";

import "./style.scss";
import Carousel from "../Carousel";

export default function CatalogComponent() {
  return (
    <main className="catalog-container">
      <div className="filtro">
        <ul>
          <li>
            <Button variant="outlined">TV Series</Button>
          </li>
          <li>
            <Button variant="contained">Movies</Button>
          </li>
        </ul>
      </div>
      <div className="carousels-container">
        <Carousel movieUrlApi="movies-popular" movieCategory="Movies popular" />
        <Carousel movieUrlApi="movies-now-playing" movieCategory="Movies now playing" />
        <Carousel movieUrlApi="movies-upcoming" movieCategory="Movies upcoming" />
        <Carousel movieUrlApi="movies-top-rated" movieCategory="Movies top rated" />
      </div>
    </main>
  );
}
