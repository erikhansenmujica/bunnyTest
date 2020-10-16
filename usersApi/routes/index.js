var express = require("express");
var router = express.Router();
var usersRouter = require("./users");

router.use("/users", usersRouter);

router.get("/ping", function (req, res, next) {
  res.send("pong");
});

module.exports = router;
