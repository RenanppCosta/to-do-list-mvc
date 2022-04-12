const router = require("express").Router();
const TaskController = require("../controllers/TaskController")

router.get("/", TaskController.getAllTasks)
router.post("/create", TaskController.createTask)


module.exports = router