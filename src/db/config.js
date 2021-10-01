const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

//O OPEN Tem que estar dentro uma estrutura de função não de objeto
module.exports = () =>
  open({
    filename: "./database.sqlite",
    driver: sqlite3.Database,
  });
