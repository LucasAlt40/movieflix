/* eslint-disable */
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import getData from "../../functions/getData";

import "./style.css";
import Carousel from "../Carousel";

export default function Catalog() {
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);
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
            `/movie/${filtro === undefined ? "now_playing" : filtro}?api_key=${apiKey}&language=pt-BR}`
        );
        setFilme(response.results);

        setLoading(false);
    }

    useEffect(() => {
        fetchApi();

    }, [filtro]);

    if (loading) {
        return <h1>Loading...</h1>;
    }


    return (
        <>
            <Carousel
                filter={filtro}
                filterMovie={filterMovie}
                movies={filme}
            />
        </>
    );
}
