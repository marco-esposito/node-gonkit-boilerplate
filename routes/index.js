'use strict';

const router = require('express').Router();
const users = require('../routes/users');

const _404 = {
  errors: [
    'API not found'
  ],
}

router.get('/', (req, res) => res.send('AsdBooking API Status: available'));

router.use('/users', users);

router.get('/*', (req, res) => res.status(404).send(_404));
router.post('/*', (req, res) => res.status(404).send(_404));

module.exports = router;
