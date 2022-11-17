const router = require("express").Router();
const TaskController = require("../controllers/TaskController");

router.get("/", TaskController.getAllTasks);
router.post("/create", TaskController.createTask);
router.get("/getById/:id/:method", TaskController.getById);
router.post("/updateOne/:id", TaskController.updateOneTask);
router.get("/deleteOne/:id", TaskController.deleteOneTask);
router.get("/check/:id", TaskController.taskCheck);

module.exports = router