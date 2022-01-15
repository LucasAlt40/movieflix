/* eslint-disable */
import React from "react";

import Carousel from "../Carousel";

import "./style.css";

export default function Catalog() {
    const filters = ["upcoming", "now_playing", "popular", "top_rated"];

    return (
        <main>
            <div>
                {filters.map((filter) => (
                    <div className="carousel-container" key={filter}>
                        <Carousel filter={filter} />
                    </div>
                ))}
            </div>
        </main>
    );
}
