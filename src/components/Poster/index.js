import React, {useEffect, useState} from "react";
import { Link as LinkTo } from "react-router-dom";
import {Box, Tag, TagLabel} from "@chakra-ui/react";

import "./style.css";
import getData from "../../functions/getData";

export default function Poster(props) {
  const { movieId } = props;
  const [showVote, setShowVote] = useState(true);
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState({});

  const apiKey = process.env.REACT_APP_API_KEY;

  async function fetchApi() {
    const data = await getData(
        `/movie/${movieId}?api_key=${apiKey}&language=pt-BR`
    );
    setMovie(data);
    setLoading(false);
  }

  const dateApi = new Date(movie.release_date);
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


  useEffect(() => {
    fetchApi();
  }, [loading]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  console.log(movie);

  return (
    <LinkTo
      className="poster"
      key={movie.id}
      to={`/Details/${movie.title}/${movie.id}`}
      // onMouseEnter={() => setShowVote(true)}
      // onMouseLeave={() => setShowVote(false)}
    >
      {movie?.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/original` + movie.poster_path}
          alt="poster img"
        />
      ) : (
        <h1>Não foi possivel encontrar o poster do filme</h1>
      )}
      {showVote && (
          <Box className="movie-box" bg="#252525" w="100%" h="100px" >
            <div className="movie-infos">
              <div className="movie-title-vote">
                <p>
                  {movie.title} ({date}){" "}
                </p>
                <Tag className="movie-vote" size="lg" variant="solid" bg="#000" color={changeColorVote(movie.vote_average)}>
                  {movie.vote_average}
                </Tag>
              </div>
              <div className="movie-additional-info">
                {movie?.genres.map((genre) => (
                    <Tag
                        size={"lg"}
                        borderRadius='full'
                        variant='solid'
                        colorScheme='green'
                    >
                      <TagLabel>{genre.name}</TagLabel>
                    </Tag>
                ))}
              </div>
            </div>
          </Box>
      )}
    </LinkTo>
  );
}
