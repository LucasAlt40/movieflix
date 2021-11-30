/* eslint-disable */
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./style.scss";

import { Pagination } from "antd";

import { FilmContext } from "../../providers/film";

export default function Catalog(props) {
  const { typeShow } = props;

  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const { setFilm } = useContext(FilmContext);

  const api_key = process.env.REACT_APP_API_KEY;

  async function fetchData(url) {
    const data = await axios.get(`https://api.themoviedb.org/3/${url}`);
    return data;
  }

  async function fetchApi() {
    const response = await fetchData(
      `trending/${typeShow}/week?api_key=${api_key}&language=pt-BR&page=${page.toString()}`
    );
    setFilme(response.data.results);
    setLoading(false);
  }

  function handleSetFilm(id) {
    const filmId = id;
    localStorage.setItem("film", JSON.stringify(filmId));
    setFilm(filmId);
  }

  useEffect(() => {
    if (page || typeShow) {
      fetchApi();
    }
  }, [page, typeShow]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <Pagination
        defaultCurrent={1}
        current={page}
        defaultPageSize={20}
        pageSizeOptions={[20]}
        onChange={(pag) => {
          setPage(pag);
        }}
        total={1000}
      />
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
              <h2>{film.title === undefined ? film.name : film.title}</h2>
              <h3>Nota:{film.vote_average}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
