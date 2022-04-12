const router = require("express").Router();
const TaskController = require("../controllers/TaskController")

router.get("/home", TaskController.getAll)


module.exports = router