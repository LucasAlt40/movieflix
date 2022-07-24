const axios = require("axios");
require("dotenv").config();

module.exports = () => {
  const controller = {};

  controller.listDetailsMovie = async (req, res) => {
    const query = req.query;

    const urlTv = `https://api.themoviedb.org/3/tv/${query.movieId}`;
    const urlMovie = `https://api.themoviedb.org/3/movie/${query.movieId}`;

    const url = (query.typeMedia === "tv") ? urlTv : urlMovie;
    const options = {
      method: "GET",
      url: url,
      params: {
        language: "en-US",
        api_key: process.env.API_KEY,
        page: query.page,
      },
    };

    await axios
      .request(options)
      .then((response) => {
        if (response.data) {
          res.status(200).json(response.data);
        } else {
          res.status(204).json(response.data);
        }
        
      })
      .catch((error) => {
        res.status(400).json(error.message);
        console.log(error.message);
        console.log(error);
      });
  };

  return controller;
};
