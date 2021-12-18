/* eslint-disable */
import React, { useEffect, useState } from "react";

import Poster from "../Poster";

import fetchData from "../../functions/fetchData";
import ReactPaginate from "react-paginate";

import { Button, Flex } from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";

import "./style.css";

export default function Catalog() {
  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const apiKey = process.env.REACT_APP_API_KEY;

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

  const handleNextPage = ({ selected }) => {
    setPage(selected + 1);
  };

  console.log(filme);
  return (
    <>
      <div className="pagination">
        <ReactPaginate
          pageRangeDisplayed={5}
          previousLabel={
            <Button bg="blue.500" leftIcon={<ArrowBackIcon />}>
              Retroceder
            </Button>
          }
          nextLabel={
            <Button bg="blue.500" rightIcon={<ArrowForwardIcon />}>
              Avançar
            </Button>
          }
          pageCount={totalPages}
          onPageChange={handleNextPage}
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
        width={"100rem"}
        align={"center"}
        justifyContent={"center"}
      >
        {filme.map((film) => (
          <Poster key={film.id} film={film} />
        ))}
      </Flex>
    </>
  );
}
