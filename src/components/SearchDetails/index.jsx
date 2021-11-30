/* eslint-disable */
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { FilmContext } from "../../providers/film";

import { AutoComplete } from "antd";
const { Option } = AutoComplete;

export default function SearchDetails(props) {
  const { typeShow } = props;

  const [search, setSearch] = useState([]);

  const [query, setQuery] = useState("");

  const { setFilm } = useContext(FilmContext);

  const api_key = process.env.REACT_APP_API_KEY;

  async function fetchData(url) {
    const data = await axios.get(`https://api.themoviedb.org/3/${url}`);
    return data;
  }

  async function fetchApiSearch() {
    const response = await fetchData(
      `search/${typeShow}?api_key=${api_key}&language=pt-BR&query=${query}`
    );
    setSearch(response.data.results);
  }

  function handleSearch(value) {
    setQuery(value);
  }

  function handleSetFilm(id) {
    const filmId = id;
    localStorage.setItem("film", JSON.stringify(filmId));
    setFilm(filmId);
  }

  useEffect(() => {
    if (query) {
      fetchApiSearch();
    }
  }, [handleSearch, typeShow]);
  return (
    <>
      <AutoComplete
        style={{
          width: 200,
          margin: "1rem",
        }}
        onSearch={handleSearch}
        placeholder="input here"
      >
        {search.map((filme) => (
          <Option key={filme.id}>
            <Link
              onClick={() => {
                handleSetFilm(filme.id);
              }}
              to="/teste"
            >
              {filme.title === undefined ? filme.name : filme.title}
            </Link>
          </Option>
        ))}
      </AutoComplete>
    </>
  );
}
