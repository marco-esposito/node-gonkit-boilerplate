'use strict';

const router = require('express').Router();
const users = require('../routes/users');

router.get('/', (req, res) => res.send('AsdBooking API Status: available'));

router.use('/users', users);

module.exports = router;
