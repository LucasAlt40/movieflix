module.exports = (app) => {
  const controller = require("../controllers/moviesPopularController")();

  app.route("/movies-popular").get(controller.listMoviesPopular);
};
