import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

export default function Poster({ movie = {}, typeMedia }) {
  let nameMedia = movie?.title || movie?.name;
  nameMedia = nameMedia.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');
  return (
    <div className="item">
      <Link to={`/details/${nameMedia}/${movie.id}/${typeMedia}`} className="poster">
        <img
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          alt="movie poster"
        />

        <div className="info">
          <h3>Click for more details</h3>
        </div>
      </Link>
    </div>
  );
}
