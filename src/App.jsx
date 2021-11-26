/* eslint-disable */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilmDetails from "./components/FilmDetails";
import Home from "./components/Home";
import { FilmeProvider } from "./providers/film";

function App() {
  return (
    <FilmeProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/teste" element={<FilmDetails />} />
        </Routes>
      </BrowserRouter>
    </FilmeProvider>
  );
}

export default App;
