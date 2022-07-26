import { Skeleton } from "@mui/material";
import { isEmpty } from "lodash";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

export default function Poster({ movie = {}, typeMedia }) {
  const [loading, setLoading] = useState(true);

  let nameMedia = movie?.title || movie?.name;
  nameMedia = nameMedia
    .normalize("NFD")
    .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "");

  useEffect(() => {
    if(!isEmpty(movie)) {
      setLoading(false);
    }
  }, [movie]);

  return (
    <div className="item">
      {loading ? (
        <Skeleton variant="rect" width={"100%"} height={"60%"} />
      ) : (
        <Link
          to={`/details/${nameMedia}/${movie.id}/${typeMedia}`}
          className="poster"
        >
          <img
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            alt="movie poster"
          />

          <div className="info">
            <h3>Click for more details</h3>
          </div>
        </Link>
      )}
    </div>
  );
}
