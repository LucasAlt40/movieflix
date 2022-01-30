import React, { useEffect, useState } from "react";

import { useParams } from "react-router";
import { axiosGet } from "../../utils";

import { Skeleton } from "@mui/material";

import "./styles.scss";

export default function DetailsMovie() {
  const { id } = useParams();

  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);

  const fetchApi = async () => {
    const url = `http://localhost:8080/movie-details`;

    const options = {
      method: "GET",
      url: url,
      params: { page: 1, movieId: id },
    };

    await axiosGet(options)
      .then((response) => {
        console.log(response.data);
        setMovie(response.data);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    fetchApi();
  }, []); // eslint-disable-line

  return (
    <>
      {!loading ? (
        <div>
          <img
            className="bg-image"
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt="poster"
          />
          <div className="details-content">
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt="poster-movie"
            />
            <h1 style={{ color: "#FFF" }}>{movie?.title}</h1>
            <div className="genres">
              {movie.genres.map((genre) => (
                <div>
                  <h4>{genre.name}</h4>
                </div>
              ))}
            </div>
            <section style={{ color: "#FFF" }}>
              <p>{movie?.overview}</p>
            </section>
          </div>
        </div>
      ) : (
        <Skeleton variant="rect" width={210} height={118} />
      )}
    </>
  );
}
