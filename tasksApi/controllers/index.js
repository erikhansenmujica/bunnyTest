const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../queries/tasks");
const { getUser } = require("../queries/user");

const createTasksController = async (req, res) => {
  if (
    req.body.name &&
    req.body.description &&
    req.body.state &&
    req.params.userId
  ) {
    try {
      const task = await createTask(req.body);
      const user = await getUser(req.params.userId);
      await user.addTask(task);
      const tasks = await getTasks(null, req.params.userId);
      res.send(tasks);
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: "internal server error" });
    }
    return;
  }
  res.status(400).send({ error: "bad request" });
};

const getTasksController = async (req, res) => {
  try {
    const tasks = await getTasks(req.params.taskId, req.params.userId);
    res.send(tasks);
  } catch (error) {
    res.status(500).send({ error: "internal server error" });
  }
};

const updateTaskController = async (req, res) => {
  if (req.body.id) {
    try {
      await updateTask(req.body);
      const tasks = await getTasks(null, req.params.userId);
      res.send(tasks);
    } catch (error) {
      res.status(500).send({ error: "internal server error" });
    }
    return;
  }
  res.status(400).send({ error: "bad request" });
};

const deleteTaskController = async (req, res) => {
  if (req.params.taskId) {
    try {
      await deleteTask(req.params.taskId);
      const tasks = await getTasks(null, req.params.userId);
      res.send(tasks);
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: "internal server error" });
    }
    return;
  }
  res.status(400).send({ error: "bad request" });
};
module.exports = {
  createTasksController,
  getTasksController,
  updateTaskController,
  deleteTaskController,
};
