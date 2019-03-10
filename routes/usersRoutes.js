'user strict';

const router = require('express').Router();

const users = require('../controllers/usersController');
const wrapAsync = require('../utils/wrapAsync');

/**
 * Users Routes
 */
// prettier-ignore
router
  .get('/', wrapAsync(users.getUsers))
  .post('/sign-up', wrapAsync(users.signUp))
  .get('/sign-in', wrapAsync(users.signIn));

module.exports = router;
