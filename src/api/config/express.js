const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

module.exports = () => {
  const app = express();

  // Setting application variables
  app.set("port", process.env.PORT || 8080);

  // Middleware's
  app.use(bodyParser.json(), cors());

  // Routes
  require("../routes/moviesPopularRoute")(app);
  require("../routes/moviesNowPlayingRoute")(app);
  require("../routes/moviesUpcomingRoute")(app);
  require("../routes/moviesTopRatedRoute")(app);
  require("../routes/movieDetailsRoute")(app);

  return app;
};
