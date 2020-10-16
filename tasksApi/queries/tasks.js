const { Tasks } = require("../db/models");

const createTask = async (body) => {
  const task = await Tasks.create(body);
  return task;
};
const getTasks = async (id, userId) => {
  const tasks = await Tasks.findAll({
    where: id ? { id } : userId ? { user_id: userId } : "",
  });
  return tasks;
};
const updateTask = async (body) => {
  const task = await Tasks.update(body, { where: { id: body.id } });
  return task;
};
const deleteTask = async (id) => {
  const result = await Tasks.destroy({ where: { id } });
  return result;
};
module.exports = { createTask, getTasks, updateTask, deleteTask };
