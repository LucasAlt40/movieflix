import React, { useEffect, useState } from "react";
import { axiosGet } from "../../utils";
import { isEmpty } from "lodash";

import { Box, Modal, TextField } from "@mui/material";
import "./styles.scss";
import { Link } from "react-router-dom";

export default function ModalSearch(props) {
  const { open, setOpen } = props;

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const handleClose = () => setOpen(false);

  const fetchApi = async () => {
    const url = `http://localhost:8080/movie-search`;

    const options = {
      method: "GET",
      url: url,
      params: { page: 1, query: search },
    };

    await axiosGet(options)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => console.log(err));
  };

  const renderTitleMovies = () =>
    movies.map((movie) => {
      return (
        <Link onClick={handleClose} to={`/details/${movie.title}/${movie.id}`} className="movie-title" key={movie?.id}>
          <h3>{movie?.title}</h3>
        </Link>
      );
    });

  useEffect(() => {
    if (search) {
      fetchApi();
    }
  }, [search]); // eslint-disable-line

  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modal-search">
        <TextField
          className="input-movie"
          id="standard-basic"
          label="Movie title"
          variant="standard"
          onChange={(e) => setSearch(e.target.value)}
        />
        {isEmpty(search) ? <h3>Try type something...</h3> : renderTitleMovies()}
      </Box>
    </Modal>
  );
}
