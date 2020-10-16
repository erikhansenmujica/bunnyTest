var express = require("express");
const {
  createUserController,
  getUsersController,
  updateUserController,
  deleteUserController,
} = require("../controllers");
var router = express.Router();

/* GET users listing. */
router.get("/", getUsersController);
router.get("/:userId", getUsersController);
router.post("/", createUserController);
router.put("/", updateUserController);
router.delete("/:userId", deleteUserController);

module.exports = router;
