module.exports = (app) => {
  const controller = require("../controllers/moviesNowPlayingController")();

  app.route("/movies-now-playing").get(controller.listMoviesNowPlaying);
};
