const Express = require("express");
const ProfileController = require("./controllers/ProfileController");
const JobControoler = require("./controllers/JobController");
const DashboardController = require("./controllers/DashboardController");
const routes = Express.Router();

routes.get("/", DashboardController.index);
routes.get("/job", JobControoler.create);
routes.post("/job", JobControoler.save);
routes.get("/job/:id", JobControoler.show);
routes.post("/job/:id", JobControoler.update);
routes.post("/job/delete/:id", JobControoler.delete);
routes.get("/profile", ProfileController.index);
routes.post("/profile", ProfileController.update);

module.exports = routes;
