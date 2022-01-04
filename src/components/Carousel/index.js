import {Swiper, SwiperSlide} from "swiper/swiper-react.cjs";
import Poster from "../Poster";
import React from "react";
import SwiperCore, {Navigation, Pagination} from "swiper";
import {Heading} from "@chakra-ui/react";

SwiperCore.use([Pagination, Navigation]);

export default function Carousel(props) {
    const { movies, filter, filterMovie } = props;
    return (
        <>
            <Heading color="white" align="center">{`Filmes ${filter === undefined ? "em Cartaz" : filterMovie}`}</Heading>
            <Swiper
                style={{height: "650px", width: "80%"}}
                slidesPerView={4}
                loop={true}
                navigation={true}
            >
                {movies.map(movie => (
                    <SwiperSlide key={movie.id}>
                        <Poster film={movie}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}