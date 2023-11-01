/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { isEmpty } from "lodash";

import { Box, Modal, TextField } from "@mui/material";
import "./styles.scss";
import { Link } from "react-router-dom";
import getSearch from "../../api/getSearch";

export default function ModalSearch(props) {
  const { open, setOpen, typeMedia } = props;

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const handleClose = () => setOpen(false);

  const fetchApi = async () => {
    const response = await getSearch(typeMedia, search);
    setMovies(response.results);
  };

  const renderTitleMovies = () =>
    movies.map((movie) => {
      return (
        <Link
          onClick={handleClose}
          to={`/details/${movie?.title || movie?.name}/${
            movie.id
          }/${typeMedia}`}
          className="movie-title"
          key={movie?.id}
        >
          <h3>{typeMedia === "tv" ? movie?.name : movie?.title}</h3>
        </Link>
      );
    });

  useEffect(() => {
    if (search) {
      fetchApi();
    }
  }, [search, typeMedia]); // eslint-disable-line

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
