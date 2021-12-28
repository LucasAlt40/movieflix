/* eslint-disable */
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Pagination from "../Pagination";
import Poster from "../Poster";
import getData from "../../functions/getData";

import { Heading } from "@chakra-ui/react";

import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Catalog() {
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [filterMovie, setFilterMovie] = useState("");
    const {filtro} = useParams();

    useEffect(() => {
        if (filtro === "upcoming") {
            setFilterMovie("próximos a lançar");
        } else if (filtro === "popular") {
            setFilterMovie("em alta");
        } else if (filtro === "top_rated") {
            setFilterMovie("favoritos pela crítica");
        }
    }, [filtro]);

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

            <Heading color="white" align="center">{`Filmes ${filtro === undefined ? "em Cartaz" : filterMovie}`}</Heading>

            {/*<Flex
                wrap="wrap"
                width="100rem"
                align="center"
                justifyContent="center"
                margin="0 auto"
            >
                {filme.map((film) => (
                    <Poster key={film.id} film={film}/>
                ))}
            </Flex>*/}
            <Swiper slidesPerView={3} spaceBetween={30} style={{display: "flex", flexDirection: "row"}}>
                {filme.map(movie => (
                    <SwiperSlide key={movie.id}><Poster film={movie}/></SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
