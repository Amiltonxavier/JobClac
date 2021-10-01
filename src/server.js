const express = require("express");
const routes = require("./router");
const server = express();
const path = require("path");

//Usar o req.body
server.use(express.urlencoded({ extended: true }));

//Usando o template engine
server.set("view engine", "ejs");

//Mudar a localicação da pasta views
server.set("views", path.join(__dirname, "views"));

//habilitar arquivos statics
server.use(express.static("public"));
server.use(routes);

server.listen(3000, () => console.log("Server is runnig"));
