"user strict";

const router = require("express").Router();

const users = require("../controllers/usersController");
const wrapAsync = require("../utils/wrapAsync");

/**
 * Users Routes
 */
router
  .get("/", wrapAsync(users.getUsers))
  .post("/", wrapAsync(users.createUser));

module.exports = router;
