import React from "react";
import { useSelector } from "react-redux";

export default function Details() {
  const store = useSelector((state) => state.film);
  console.log(store);
  return (
    <>
      <div>
        <h1>{store?.title ? store.title : "Filme não encontrado"}</h1>
        <img
          src={`https://image.tmdb.org/t/p/w300/${store.poster_path}`}
          alt="poster filme"
        />
      </div>

      <div>
        <p>{store.overview}</p>
        <h2>{store.vote_average}</h2>
      </div>
    </>
  );
}
