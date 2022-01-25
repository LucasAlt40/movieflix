import React from "react";
import FavoriteButton from "../FavoriteButton";

import "./styles.scss";

export default function Poster({ movie = {} }) {
  return (
    <div className="item">
      <FavoriteButton />
      <div className="poster">
        <img
          src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          alt="movie poster"
        />
      </div>
    </div>
  );
}
