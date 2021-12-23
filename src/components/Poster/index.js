import React from "react";
import { Link as LinkTo } from "react-router-dom";
import { Box, Tag } from "@chakra-ui/react";

import "./style.css";

export default function Poster(props) {
  const { film } = props;

  const dateApi = new Date(film.release_date);
  const date = dateApi.getFullYear();

  return (
    <LinkTo
      className="poster"
      key={film.id}
      to={`/Details/${film.title}/${film.id}`}
    >
      {film?.poster_path ? (
        <img
          style={{ objectFit: "cover", height: "450px" }}
          src={`https://image.tmdb.org/t/p/w300` + film.poster_path}
          alt="poster img"
        />
      ) : (
        <h1>Não foi possivel encontrar o poster do filme</h1>
      )}
      <Box className="film-box" bg="#114B5F" w="100%" h="70px" >
        <div className="film-title">
          <p>
            {film.title} ({date}){" "}
          </p>
          <Tag className="film-vote" size="lg" variant="solid" bg="blue.500">
            {film.vote_average}
          </Tag>
        </div>
      </Box>
    </LinkTo>
  );
}
