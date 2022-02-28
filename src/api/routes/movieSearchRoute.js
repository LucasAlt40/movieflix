module.exports = (app) => {
  const controller = require("../controllers/movieSearchController")();

  app.route("/movie-search").get(controller.searchMovie);
};
