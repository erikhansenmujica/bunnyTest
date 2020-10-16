const { Users, Tasks } = require("../db/models");

const createUser = async (name) => {
  const user = await Users.create({ name });
  return user;
};
const getUsers = async (id) => {
  const users = await Users.findAll({
    where: id ? { id } : "",
    include: Tasks,
  });
  return users;
};
const updateUser = async (body) => {
  const user = await Users.update(body, { where: { id: body.id } });
  return user;
};
const deleteUser = async (id) => {
  const result = await Users.destroy({ where: { id } });
  return result;
};
module.exports = { createUser, getUsers, updateUser, deleteUser };
