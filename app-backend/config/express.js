const express = require("express");
const bodyParser = require("body-parser");
const config = require("config");
const cors = require("cors");

module.exports = () => {
  const app = express();

  // Setting application variables
  app.set("port", process.env.PORT || config.get("server.port"));

  // Middleware's
  app.use(bodyParser.json(), cors());

  // Routes
  require("../src/routes/moviesPopularRoute")(app);
  require("../src/routes/moviesNowPlayingRoute")(app);
  require("../src/routes/moviesUpcomingRoute")(app);
  require("../src/routes/moviesTopRatedRoute")(app);

  return app;
};
