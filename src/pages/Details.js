import { Button } from "@chakra-ui/react";
import { Link as LinkTo } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

export default function Details() {
  const store = useSelector((state) => state.film);
  console.log(store);
  return (
    <>
      <div>
        <LinkTo to={"/"}>
          <Button>Voltar para Home</Button>
        </LinkTo>
        <h1>{store?.title ? store.title : "Filme não encontrado"}</h1>
        <img
          src={`https://image.tmdb.org/t/p/w300/${store.poster_path}`}
          alt="poster filme"
          style={{ objectFit: "cover", height: "450px" }}
        />
      </div>

      <div>
        <p>{store?.overview ? store.overview : "Descrição não encontrada"}</p>
        <h2>{store?.vote_average ? store.vote_average : "Nota não encontrada"}</h2>
      </div>
    </>
  );
}
