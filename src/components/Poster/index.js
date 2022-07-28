import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

export default function Poster({ nameMedia, id, poster_path, typeMedia }) {
  nameMedia = nameMedia
    .normalize("NFD")
    .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "");

  return (
    <Link to={`/details/${nameMedia}/${id}/${typeMedia}`} className="item">
      <img
        src={"https://image.tmdb.org/t/p/w500" + poster_path}
        alt="movie poster"
      />
    </Link>
  );
}
