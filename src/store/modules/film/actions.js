export default function setStatesFilm(film) {
  return {
    type: "SET_STATE_FILM",
    payload: {
      film,
    },
  };
}
