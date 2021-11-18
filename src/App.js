/* eslint-disable */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";

function App() {
  const [filme, setFilme] = useState({});
  const [nomeFilme, setNomeFilme] = useState("");
  const [loading, setLoading] = useState(true);
  const [filmId, setFilmId] = useState("");

  const api_key = process.env.REACT_APP_API_KEY;

  async function fetchApi() {
    await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${nomeFilme}&language=pt-Br`
      )
      .then((response) => {
        setFilmId(response.data.results[0].id);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(`https://api.themoviedb.org/3/movie/${filmId}?api_key=${api_key}&language=pt-Br`)
      .then((response) => {
        setFilme(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchApi();
  }, [nomeFilme]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <label>Nome do filme:</label>
      <input
        onChange={(e) => {
          setNomeFilme(e.target.value);
        }}
        type="text"
      />
      <hr />
      <h2>O filme escolhido foi...</h2>
      <h3>{filme.title}</h3>
      <img
        src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}
        alt=""
      />
    </div>
  );
}

export default App;
