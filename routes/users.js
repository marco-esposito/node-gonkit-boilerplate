"user strict";

const router = require("express").Router();

const users = require("../controllers/users");
const wrapAsync = require("../utils/wrapAsync");

/**
 * Users Routes
 */
router
  .get("/", wrapAsync(users.getUsers))
  // .get('/', wrapAsync(users.getErrorHandlingTest)) //NOTE: enable to test error handling (and disable the getUsers)
  .post("/", wrapAsync(users.createUser));

module.exports = router;
