'use strict';

require('dotenv').config();
const config = require('./config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const router = require('./routes');

app.use(morgan('dev'));
app.use(helmet());
app.use(bodyParser.json());
app.use(config.apiPrefix, router);

app.listen(config.port, () => console.log(`Example app listening on port ${config.port}!`));