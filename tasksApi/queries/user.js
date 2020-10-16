const { Users } = require("../db/models");

const getUser = async (id) => {
  const user = await Users.findByPk(id);
  return user;
};
module.exports = { getUser };
