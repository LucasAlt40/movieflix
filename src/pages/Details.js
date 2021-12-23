/* eslint-disable */
import {Box, Button, Center, Container, Divider, Heading} from "@chakra-ui/react";
import { Link as LinkTo, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { ArrowBackIcon } from "@chakra-ui/icons";
import getData from "../functions/getData";

import "../styles/details.css";

export default function Details() {
  const [loading, setLoading] = useState(true);
  const [film, setFilm] = useState({});

  const { id } = useParams();

  const apiKey = process.env.REACT_APP_API_KEY;

  async function fetchApi() {
    const data = await getData(
      `/movie/${id}?api_key=${apiKey}&language=pt-BR`
    );
    setFilm(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchApi();
  }, [loading]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Header />

      <Center>
        <div className="details-container">
          <Heading align="center">{film?.title ? film.title : "Filme não encontrado"}</Heading>
          <img
            src={`https://image.tmdb.org/t/p/w300/${film.poster_path}`}
            alt="poster filme"
            style={{ objectFit: "cover", height: "450px", margin: "1rem" }}
          />
        </div>
      </Center>

      <Center>
        <Container>
          <Box bg={"#1C4532"} w={"100%"} p={5} color={"white"}>
            <div>
              <p>
                {film?.overview ? film.overview : "Descrição não encontrada"}
              </p>
              <h2 style={{ color: "red" }}>
                {film?.vote_average ? film.vote_average : "Nota não encontrada"}
              </h2>
            </div>
            <Divider m={2} />
            <LinkTo to={"/"}>
              <Button leftIcon={<ArrowBackIcon />} bg={"grey"}>
                Voltar para Home
              </Button>
            </LinkTo>
          </Box>
        </Container>
      </Center>
    </>
  );
}
