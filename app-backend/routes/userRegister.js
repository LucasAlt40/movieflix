module.exports = (app) => {
  const controller = require("../controllers/userRegister")();

  app.route("/user/register").post(controller.userRegister);
}