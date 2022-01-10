import React, {useEffect, useState} from "react";

import {Swiper, SwiperSlide} from "swiper/swiper-react.cjs";
import SwiperCore, {Navigation, Pagination} from "swiper";

import {Heading} from "@chakra-ui/react";

import getData from "../../functions/getData";
import Poster from "../Poster";

import "./style.css";

SwiperCore.use([Pagination, Navigation]);

export default function Carousel(props) {

    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const { filter, ...rest } = props;
    const apiKey = process.env.REACT_APP_API_KEY;

    async function fetchApi() {
        const response = await getData(`/movie/${filter}?api_key=${apiKey}&language=pt-BR}`);
        setMovie(response.results);

        setLoading(false);
    }

    console.log(movie)
    useEffect(() => {
        fetchApi();
    }, []); // eslint-disable-line

    if (loading) {
        return <h1>Loading...</h1>;
    }

    // const swiper = new Swiper('.swiper', {
    //     navigation: {
    //         hideOnClick: true,
    //     }
    // })

    return (
        <>
            <div {...rest}>
                <Heading color="white" align="center">{`Filmes ${filter === undefined ? "em Cartaz" : "teste"}`}</Heading>
                <Swiper
                    style={{width: "99vw"}}
                    spaceBetween={50}
                    slidesPerView={4}
                    loop={true}
                    navigation={true}
                    centeredSlides={true}
                    centeredSlidesBounds={true}
                >
                    {movie.map(movie => (
                        <SwiperSlide key={movie.id}>
                            <Poster film={movie}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}