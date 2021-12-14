/* eslint-disable */
import { Box, Button, Center, Container, Divider } from "@chakra-ui/react";
import { Link as LinkTo } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import setStatesFilm from "../store/modules/film/actions";
import Header from "../components/Header";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function Details() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const store = useSelector((state) => state.film);

  const filme = JSON.parse(localStorage.getItem("film"));

  const handleSetFilm = useCallback(
    (film) => {
      dispatch(setStatesFilm(film));
      setLoading(false);
    },
    [dispatch]
  );

  useEffect(() => {
    handleSetFilm(filme);
  }, [loading]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Header />

      <Center>
        <div>
          <h1>{store?.title ? store.title : "Filme não encontrado"}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w300/${store.poster_path}`}
            alt="poster filme"
            style={{ objectFit: "cover", height: "450px" }}
          />
        </div>
      </Center>

      <Center>
        <Container>
          <Box bg={"#1C4532"} w={"100%"} p={5} color={"white"}>
            <div>
              <p>
                {store?.overview ? store.overview : "Descrição não encontrada"}
              </p>
              <h2 style={{ color: "red" }}>
                {store?.vote_average
                  ? store.vote_average
                  : "Nota não encontrada"}
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
