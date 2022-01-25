const db = require("../database/db");
/* const checkUserAlreadyExists = require("../functions/checkUserAlreadyExists"); */

module.exports = () => {
  const controller = {};

  controller.userRegister = async (req, res) => {
    const { username, password } = await req.body;

    const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
    
    await db.exec("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username VARCHAR(255) NOT NULL, password VARCHAR(255))");

    await db.run(sql, [username, password], function (err) {
      if (err) {
        console.log(err);
        return res.status(400).json(err);
      }
      return res.status(200).json({
        message: "User created successfully",
      });
    });

    db.close();
  };

  return controller;
};
