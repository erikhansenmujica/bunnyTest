var express = require("express");
var router = express.Router();
var tasksRouter = require("./tasks");

router.use("/tasks", tasksRouter);

router.get("/ping", function (req, res, next) {
  res.send("pong");
});

module.exports = router;
