'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./routes');

const apiPrefix = process.env.API_PREFIX;
const port = 3001;

app.use(apiPrefix, router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
