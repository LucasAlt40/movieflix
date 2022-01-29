module.exports = (app) => {
  const controller = require("../controllers/moviesUpcomingController")();

  app.route("/movies-upcoming").get(controller.listMoviesUpcoming);
};
