const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../queries/user");

const createUserController = async (req, res) => {
  if (req.body.name) {
    try {
      await createUser(req.body.name);
      const users = await getUsers();
      res.send(users);
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: "internal server error" });
    }
    return;
  }
  res.status(400).send({ error: "bad request" });
};

const getUsersController = async (req, res) => {
  try {
    const users = await getUsers(req.params.userId);
    res.send(users);
  } catch (error) {
    console.log(error);

    res.status(500).send({ error: "internal server error" });
  }
};

const updateUserController = async (req, res) => {
  if (req.body.id) {
    try {
      await updateUser(req.body);
      const users = await getUsers();
      res.send(users);
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: "internal server error" });
    }
    return;
  }
  res.status(400).send({ error: "bad request" });
};

const deleteUserController = async (req, res) => {
  if (req.params.userId) {
    try {
      await deleteUser(req.params.userId);
      const users = await getUsers();
      res.send(users);
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: "internal server error" });
    }
    return;
  }
  res.status(400).send({ error: "bad request" });
};
module.exports = {
  createUserController,
  getUsersController,
  updateUserController,
  deleteUserController,
};
