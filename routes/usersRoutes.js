'user strict';

const router = require('express').Router();

const users = require('../controllers/usersController');
const utils = require('./utils');

/**
 * Users Routes
 */
// prettier-ignore
router
  .get('/', utils.authorize, utils.wrapAsync(users.getUsers))
  .post('/sign-up', utils.wrapAsync(users.signUp))
  .get('/sign-in', utils.wrapAsync(users.signIn));

module.exports = router;
