'user strict';

const router = require('express').Router();

/**
 * Users Routes
 */
router
  .get('/', (req, res) => res.send('users'));

module.exports = router;
