'use strict';

require('dotenv').config();
const config = require('./config');
const express = require('express');
const app = express();
const router = require('./routes');

app.use(config.apiPrefix, router);

app.listen(config.port, () => console.log(`Example app listening on port ${config.port}!`));