/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import "./styles.scss";

export default function Poster({ id, poster_path, typeMedia }) {
  const posterImg = "https://image.tmdb.org/t/p/w500" + poster_path;

  return (
    <Link to={`details/${typeMedia}/${id}/`} className="item">
      <img src={posterImg} alt="movie poster" />
    </Link>
  );
}
