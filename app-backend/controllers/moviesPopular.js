const axios = require("axios");
require("dotenv").config();
/* const db = require("../database/db"); */

module.exports = () => {
  const controller = {};

  controller.listMoviesPopular = async (req, res) => {
    const query = req.query;

    /* await db.exec(
      "CREATE TABLE IF NOT EXISTS teste (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(30))"
    ); */
    /* await db.exec("INSERT INTO teste (name, email) VALUES ('Lucas6', 'lucas6@example.com')"); */

    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/popular",
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

    /* const select = "SELECT * FROM teste";
    db.all(select, [], (err, rows) => {
      if (err) {
        throw err;
      }

      console.table(rows);
      console.log(rows);
    });
    db.close(); */
  };

  return controller;
};
