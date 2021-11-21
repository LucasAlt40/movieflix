/* eslint-disable */
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FilmContext } from "../../providers/film";

export default function FilmDetails({title}) {
  const { film } = useContext(FilmContext);
  const [filme, setFilme] = useState({});

  const api_key = process.env.REACT_APP_API_KEY;

  async function fetchApi() {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${film}?api_key=${api_key}&language=pt-BR`
      )
      .then((response) => {
        console.log(response.data);
        setFilme(response.data);
      });
  }

  useEffect(() => {
    fetchApi();
  }, [film]);

  return (
    <div>
      <Link to="/">Voltar para home</Link>
      <h1>Olá mundo</h1>
      <h2>Esse é o filme: {filme.title}</h2>
      <h3>Nota: {filme.vote_average}</h3>
      <img
        src={`https://image.tmdb.org/t/p/w200/${filme.poster_path}`}
        alt="teste"
      />
    </div>
  );
}






/* 

  var filmeID; all application 

  clicar no card filmeID= id do filme selecionado

  

*/