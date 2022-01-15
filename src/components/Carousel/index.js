import React, {useEffect, useState} from "react";

import {Swiper, SwiperSlide} from "swiper/swiper-react.cjs";
import SwiperCore, {Navigation, Pagination} from "swiper";

import {Heading, Skeleton} from "@chakra-ui/react";

import getData from "../../functions/getData";
import Poster from "../Poster";

import "./style.css";

SwiperCore.use([Pagination, Navigation]);

export default function Carousel(props) {

    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [error, setError] = useState(0);
    const { filter, ...rest } = props;
    const apiKey = process.env.REACT_APP_API_KEY;

    async function fetchApi() {
        await getData(`/movie/${filter}?api_key=${apiKey}&language=pt-BR}`)
            .then((response) => {
                console.log(response)
                setLoading(false);
                return setMovie(response.results);
            })
            .catch((error) => {
                console.log(error.message);
                setLoading(false);
                return setError(error.response.status);
            });
            if (error) {
                console.log(error);
            }
    }

    useEffect(() => {
        fetchApi();
    }, [filter]); // eslint-disable-line
    
    return (
        <>
            <div {...rest}>
                <Skeleton isLoading={!loading}>
                    <Heading color="white" align="left" style={{margin: "1rem"}}>{`Filmes ${filter}`}</Heading>
                    <Swiper
                        style={{width: "99vw"}}
                        spaceBetween={50}
                        slidesPerView={4}
                        loop={true}
                        centeredSlides={true}
                        centeredSlidesBounds={true}
                    >
                        {movie.map(movie => (
                            <SwiperSlide key={movie?.id}>
                                <Poster movieId={movie?.id}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Skeleton>
            </div>
        </>
    );
}