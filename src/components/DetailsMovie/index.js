import React, { useEffect, useState } from "react";

import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { axiosGet } from "../../utils";

import FavoriteButton from "../FavoriteButton";

import "./styles.scss";
import { ArrowBack } from "@mui/icons-material";
import { Skeleton } from "@mui/material";
import { Icon } from "@iconify/react";

export default function DetailsMovie() {
  const { id, typeMedia } = useParams();


  const navigation = useNavigate();

  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);

  const convertTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const min = minutes % 60;
    const textHours = `00${hours}`.slice(-2);
    const textMinutes = `00${min}`.slice(-2);

    return `${textHours}h${textMinutes}`;
  };

  const fetchApi = async () => {
    const url = `http://localhost:8080/movie-details`;

    const options = {
      method: "GET",
      url: url,
      params: { page: 1, movieId: id, typeMedia: typeMedia },
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
    if (id) {
      fetchApi();
    }
  }, [id]); // eslint-disable-line

  const renderDescSeasonTV = () => {
    return(
      <p>
        Episodes: <span>{movie?.number_of_episodes}</span> <br/>
        Seasons: <span>{movie?.number_of_seasons}</span>
      </p>
    );
  }

  return (
    <>
      {!loading ? (
        <div className="details-container">
          <img
            className="bg-image"
            src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
            alt="poster"
          />
          <div className="details-content">
            <div className="extra-contents">
              <button class="button-back-home" onClick={() => navigation(-1)}>
                <ArrowBack /> Back 
              </button>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="poster-movie"
              />
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon
                  icon="simple-icons:imdb"
                  color="#ffdb58"
                  width="40"
                  height="40"
                />{" "}
                <span style={{ margin: "0 1rem" }}>
                  {movie?.vote_average <= 0
                    ? "not exists yet"
                    : movie?.vote_average}
                </span>
              </p>
              <p>
                {typeMedia === "movies" ? (<>Runtime: <span>{convertTime(movie?.runtime)}</span></>) : (renderDescSeasonTV())}
              </p>
            </div>
            <div className="details-texts">
              <h1 style={{ color: "#FFF" }}>{movie?.title || movie?.name}</h1>
              <div className="genres">
                {movie.genres.map((genre) => (
                  <div key={genre.id} className="genre">
                    <h4>{genre.name}</h4>
                  </div>
                ))}
              </div>
              <section className="overview-movie" style={{ color: "#FFF" }}>
                <h3>Overview</h3>
                <p>{movie?.overview}</p>
                <div className="favorite-movie">
                  <FavoriteButton /> Add movie to yours favorite
                </div>
              </section>
            </div>
          </div>
        </div>
      ) : (
        <Skeleton variant="rect" width={210} height={118} />
      )}
    </>
  );
}
