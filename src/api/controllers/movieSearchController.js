const axios = require("axios");
require("dotenv").config();

module.exports = () => {
  const controller = {};

  controller.searchMovie = async (req, res) => {
    const query = req.query;

    const url = `https://api.themoviedb.org/3/search/movie`;

    const options = {
      method: "GET",
      url: url,
      params: {
        language: "en-US",
        api_key: process.env.API_KEY,
        page: query.page,
        query: query.query,
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
