module.exports = (app) => {
  const controller = require("../controllers/moviesTopRatedController")();

  app.route("/movies-top-rated").get(controller.listMoviesTopRated);
};
