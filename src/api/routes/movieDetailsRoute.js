module.exports = (app) => {
  const controller = require("../controllers/movieDetailsController")();

  app.route("/movie-details").get(controller.listDetailsMovie);
};
