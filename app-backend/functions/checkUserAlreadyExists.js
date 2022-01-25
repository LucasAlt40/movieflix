const db = require("../database/db");

module.exports = async (username) => {
  await db.all(
    "SELECT id FROM users WHERE username = (?)",
    [username],
    function (err, rows) {
      if (err) {
        console.log(err);
        return err;
      }

      return !rows ? true : false;
    }
  );
};
