const express = require("express");
const {
  createTasksController,
  getTasksController,
  updateTaskController,
  deleteTaskController,
} = require("../controllers");
const router = express.Router();

/* GET Tasks listing. */
router.get("/:userId", getTasksController);
router.get("/single/:taskId", getTasksController);
router.post("/create/:userId", createTasksController);
router.put("/:userId", updateTaskController);
router.delete("/:taskId/:userId", deleteTaskController);

module.exports = router;
