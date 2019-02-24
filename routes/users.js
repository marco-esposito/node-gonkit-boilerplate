'user strict';

const router = require('express').Router();
const users = require('../controllers/users');


/**
 * Users Routes
 */
router
  .get('/', users.getUsers)
  .post('/', users.createUser);

module.exports = router;
