const axios = require("axios");
require("dotenv").config();

module.exports = () => {
  const controller = {};

  controller.listMoviesPopular = async (req, res) => {
    const query = req.query;

    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/popular",
      params: {
        language: "en-US",
        api_key: process.env.API_KEY,
        page: query.page,
      },
      headers: {},
    };

    await axios
      .request(options)
      .then((response) => {
        if (response.data) {
          res.status(200).json(response.data);
        } else {
          res.status(204).json(response.data);
        }
        console.log("Request successful");
      })
      .catch((error) => {
        res.json(error);
        console.log(error.message);
        console.log(error);
      });
  };

  return controller;
};
