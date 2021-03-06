'use strict';

const router = require('express').Router();
const users = require('./usersRoutes');

const _404 = {
  errors: ['API not found']
};

router.get('/', (req, res) => res.send('API Status: available'));

router.use('/users', users);

router.all('/*', (req, res) => res.status(404).send(_404));

module.exports = router;
