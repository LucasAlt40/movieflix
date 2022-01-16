import React from 'react';

import { Button } from "@mui/material";

import "./style.scss";
import Carousel from "../Carousel";

export default function CatalogComponent() {
  return (
    <main className="catalog-container">
      <div className="filtro">
        <ul>
          <li><Button variant="outlined">TV Series</Button></li>
          <li><Button variant="contained">Movies</Button></li>
        </ul>
      </div>
      <div className="carousel">
          <Carousel />
      </div>
    </main>
  );
}