import React, { useEffect, useState } from "react";

export const FilmContext = React.createContext({});

export const FilmeProvider = ({ children }) => {
  const [film, setFilm] = useState("");
  const [typeShowContext, setTypeShowContext] = useState("tv")

  useEffect(()=> {
    const filmStorage = localStorage.getItem("film");
    if(filmStorage) {
      setFilm(JSON.parse(filmStorage))
    } else {
      setFilm("")
    }

    const typeShowStorage = localStorage.getItem("typeShowContext");
    if(typeShowStorage) {
      setTypeShowContext(JSON.parse(typeShowStorage));
    } else (
      setTypeShowContext("")
    )
  }, [film, typeShowContext])

  return (
    <FilmContext.Provider value={{ film, setFilm, typeShowContext, setTypeShowContext }}>
      {children}
    </FilmContext.Provider>
  );
};
