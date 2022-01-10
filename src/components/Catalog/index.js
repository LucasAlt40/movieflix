/* eslint-disable */
import React from "react";

import Carousel from "../Carousel";

import "./style.css";

export default function Catalog() {

    return (
        <main>
            <div>
                <div className="carousel-container">
                    <Carousel
                        filter={"upcoming"}
                    />
                </div>

                <div className="carousel-container">
                    <Carousel
                        filter={"now_playing"}
                    />
                </div>

                <div className="carousel-container">
                    <Carousel
                        filter={"popular"}
                    />
                </div>

                <div className="carousel-container">
                    <Carousel
                        filter={"top_rated"}
                    />
                </div>
            </div>
        </main>
    );
}
