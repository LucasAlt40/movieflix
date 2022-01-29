const axios = require("axios");
require("dotenv").config();

module.exports = () => {
  const controller = {};

  controller.listMoviesUpcoming = async (req, res) => {
    const query = req.query;

    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/upcoming",
      params: {
        language: "pt-BR",
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
        console.log(error);
        console.log("Request failed");
      });
  };

  return controller;
};
