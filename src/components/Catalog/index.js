/* eslint-disable */
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Pagination from "../Pagination";
import Poster from "../Poster";
import getData from "../../functions/getData";

import { Flex } from "@chakra-ui/react";

import "./style.css";

export default function Catalog() {
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const {filtro} = useParams();

    const apiKey = process.env.REACT_APP_API_KEY;

    async function fetchApi() {
        const response = await getData(
            `/movie/${filtro === undefined ? "now_playing" : filtro}?api_key=${apiKey}&language=pt-BR&page=${page.toString()}`
        );
        setFilme(response.results);
        setTotalPages(response.total_pages);
        setLoading(false);
    }

    useEffect(() => {
        fetchApi();

    }, [page, filtro]);

    const handleNextPage = ({selected}) => {
        setPage(selected + 1);
    };

    if (loading) {
        return <h1>Loading...</h1>;
    }



    return (
        <>
            <Pagination
                pageCount={totalPages}
                onPageChange={handleNextPage}
            />
            <h1 align="center" color="#FFF">Filmes {filtro === undefined ? "Passando agora" : filtro} </h1>
            <Flex
                wrap="wrap"
                margin="4rem auto"
                width="100rem"
                align="center"
                justifyContent="center"
            >
                {filme.map((film) => (
                    <Poster key={film.id} film={film}/>
                ))}
            </Flex>
        </>
    );
}
