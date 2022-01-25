const db = require("../database/db");
/* const checkUserAlreadyExists = require("../functions/checkUserAlreadyExists"); */

module.exports = () => {
  const controller = {};

  controller.userRegister = async (req, res) => {
    const { username, password } = await req.body;

    const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
    
    // preciso fazer
    /* const alreadyExists = await db.all(
      "SELECT id FROM users WHERE username = (?)",
      [username],
      (err, rows) => (err ? err : rows)
    );
    console.log(alreadyExists);
    db.close(); */

    await db.run(sql, [username, password], function (err) {
      if (err) {
        console.log(err);
        return res.status(400).json(err);
      }
      return res.status(200).json({
        message: "User created successfully",
      });
    });
  };

  return controller;
};
