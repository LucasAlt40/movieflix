import React, { useEffect, useState } from "react";

export const FilmContext = React.createContext({});

export const FilmeProvider = ({ children }) => {
  const [film, setFilm] = useState("");

  useEffect(()=> {
    const filmStorage = localStorage.getItem("film");
    if(filmStorage) {
      setFilm(JSON.parse(filmStorage))
    } else {
      setFilm("")
    }
  }, [])

  return (
    <FilmContext.Provider value={{ film, setFilm }}>
      {children}
    </FilmContext.Provider>
  );
};
