import React, { useState, useEffect, useRef } from "react";
import { axiosGet } from "../../utils";
import { isEmpty } from "lodash";

import "./style.scss";
import { Skeleton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import Poster from "../Poster";

export default function Carousel() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const carousel = useRef(null);

  const fetchApi = async () => {
    const options = {
      method: "GET",
      url: "http://localhost:8080/movies-popular",
      params: { page: 1 },
    };

    await axiosGet(options)
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
      <h1 style={{ color: "white", margin: "1rem" }}>Movies popular</h1>
      <div className="carousel" ref={carousel}>
        {!loading && !isEmpty(movies) ? (
          movies.map((movie) => <Poster key={movie.id} movie={movie} />)
        ) : (
          <Skeleton variant="rect" width={210} height={118} />
        )}
      </div>
    </div>
  );
}
