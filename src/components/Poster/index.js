import React, {useState} from "react";
import { Link as LinkTo } from "react-router-dom";
import { Box, Tag } from "@chakra-ui/react";

import "./style.css";

export default function Poster(props) {
  const { film } = props;
  const [showVote, setShowVote] = useState(false);

  const dateApi = new Date(film.release_date);
  const date = dateApi.getFullYear();

  const changeColorVote = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote < 8 && vote > 6) {
      return "yellow";
    } else {
      return "red";
    }
  }

  return (
    <LinkTo
      className="poster"
      key={film.id}
      to={`/Details/${film.title}/${film.id}`}
      onMouseEnter={() => setShowVote(true)}
      onMouseLeave={() => setShowVote(false)}
    >
      {film?.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w300` + film.poster_path}
          alt="poster img"
        />
      ) : (
        <h1>Não foi possivel encontrar o poster do filme</h1>
      )}
      {showVote && (
          <Box className="film-box" bg="#252525" w="100%" h="70px" >
            <div className="film-title">
              <p>
                {film.title} ({date}){" "}
              </p>
              <Tag className="film-vote" size="lg" variant="solid" bg="#000" color={changeColorVote(film.vote_average)}>
                {film.vote_average}
              </Tag>
            </div>
          </Box>
      )}
    </LinkTo>
  );
}
