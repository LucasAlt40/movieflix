import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

export default function Poster({ movie = {} }) {
  return (
    <div className="item">
      <Link to={`/details/${movie.title}/${movie.id}`} className="poster">
        <img
          src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          alt="movie poster"
        />

        <div className="info">
          <h3>Click for more details</h3>
        </div>
      </Link>
    </div>
  );
}
