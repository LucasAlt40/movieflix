import React, { useState, useEffect, useRef } from "react";
import { axiosGet } from "../../utils";
import { isEmpty } from "lodash";

import "./style.scss";
import { Skeleton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

export default function Carousel() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const carousel = useRef(null);

  const fetchApi = async () => {
    await axiosGet(`/movies-popular`)
      .then((response) => {
        setMovies(response.data.results);
        console.log(response.status);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    fetchApi();
  }, []); // eslint-disable-line

  const handleLeftCLick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= 1000;
  };

  const handleRightCLick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += 1000;
  };

  return (
    <div className="container">
      <div className="buttons">
        <button onClick={handleLeftCLick}>
          <ArrowBack />{" "}
        </button>
        <button onClick={handleRightCLick}>
          <ArrowForward />
        </button>
      </div>
      <div className="carousel" ref={carousel}>
        {!loading && !isEmpty(movies) ? (
          movies.map((movie) => (
            <div className="item" key={movie.id}>
              <div className="poster">
                <img
                  src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                  alt="movie poster"
                />
              </div>
              <div className="info">
                <span className="name">{movie.title}</span>
                <span className="genre">Action, Horror</span>
                <span className="vote">
                  <img
                    src="https://download.logo.wine/logo/IMDb/IMDb-Logo.wine.png"
                    alt="IMDB LOGO"
                  />{" "}
                  {movie.vote_average}
                </span>
              </div>
            </div>
          ))
        ) : (
          <Skeleton variant="rect" width={210} height={118} />
        )}
      </div>
    </div>
  );
}
