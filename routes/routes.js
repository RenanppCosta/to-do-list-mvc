const routes = require("express").Router();
const TaskController = require("../controllers/TaskController")

routes.get("/home", TaskController.getAll)


module.exports = routes