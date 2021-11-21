/* eslint-disable */
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import "./style.scss";
import { Link } from "react-router-dom";
import { FilmContext } from "../../providers/film";
import Header from "../Header";

function Home() {
  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState(1);

  const { setFilm } = useContext(FilmContext);

  function handleSetFilm(id) {
    const filmId = id;
    localStorage.setItem("film", JSON.stringify(filmId));
    setFilm(filmId);
  }

  const api_key = process.env.REACT_APP_API_KEY;

  const handleUpdatePage = () => {
    setNextPage(nextPage + 1);
  };

  const handleBackPage = () => {
    setNextPage(nextPage - 1);
  };

  const fetchApi = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/list/${nextPage.toString()}?api_key=${api_key}&language=pt-BR`
      )
      .then((response) => {
        setLoading(false);
        setFilme(response.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchApi();
  }, [nextPage]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Header/>
      <button onClick={handleBackPage}>Voltar página</button>
      <button onClick={handleUpdatePage}>Próxima página</button>
      <hr />

      <div className="film-container">
        {filme.map((film) => (
          <Link
            to="/teste"
            onClick={() => {
              handleSetFilm(film.id);
            }}
            className="film-card"
            key={film.id}
          >
            <img
              src={`https://image.tmdb.org/t/p/w200/${film.poster_path}`}
              alt="image"
            />

            <div className="title-film">
              <h2>{film.title}</h2>
              <h3>Nota:{film.vote_average}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Home;
