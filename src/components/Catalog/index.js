/* eslint-disable */
import React, { useEffect, useState } from "react";
import fetchData from "../../functions/fetchData";
import ReactPaginate from "react-paginate";

import {
  Button,
  CircularProgress,
  CircularProgressLabel,
  Flex,
} from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";

import "./style.css";

export default function Catalog() {
  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const apiKey = process.env.REACT_APP_API_KEY;
  const baseUrlImg = "https://image.tmdb.org/t/p/w300";

  async function fetchApi() {
    const response = await fetchData(
      `/trending/movie/week?api_key=${apiKey}&language=pt-BR&page=${page.toString()}`
    );
    setFilme(response.results);
    setTotalPages(response.total_pages);
    setLoading(false);
  }

  useEffect(() => {
    fetchApi();
  }, [page]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const handlePage = ({ selected }) => {
    setPage(selected + 1);
  };

  return (
    <>
      <div className="pagination">
        <ReactPaginate
          pageRangeDisplayed={19}
          previousLabel={
            <Button colorScheme={"green"} leftIcon={<ArrowBackIcon />}>
              Retroceder
            </Button>
          }
          nextLabel={
            <Button colorScheme={"green"} rightIcon={<ArrowForwardIcon />}>
              Avançar
            </Button>
          }
          pageCount={totalPages}
          onPageChange={handlePage}
          containerClassName={"paginationButtons"}
          previousLinkClassName={"previousButton"}
          nextClassName={"nextButton"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
          forcePage={0}
        />
      </div>

      <Flex
        wrap={"wrap"}
        margin={"4rem auto"}
        width={"90rem"}
        align={"center"}
        justifyContent={"center"}
      >
        {filme.map((film) => (
          <div
            style={{ width: "300px", margin: "1rem", height: "450px" }}
            key={film.id}
          >
            <CircularProgress
              value={film.vote_average}
              min={0}
              max={10}
              className="nota"
              style={{
                position: "absolute",
                marginLeft: "15.7rem",
                marginTop: "25rem",
              }}
              color="green.400"
            >
              <CircularProgressLabel color={"green.400"}>
                <strong>{film.vote_average}</strong>
              </CircularProgressLabel>
            </CircularProgress>
            {film?.poster_path ? (
              <img
                style={{ objectFit: "cover", height: "450px" }}
                src={baseUrlImg + film.poster_path}
                alt="poster img"
              />
            ) : (
              <h1>Não foi possivel encontrar o poster do filme</h1>
            )}
          </div>
        ))}
      </Flex>
    </>
  );
}
