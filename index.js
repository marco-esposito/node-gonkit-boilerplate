'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');

const config = require('./config');
const errorHandler = require('./errorMiddleware');
const router = require('./routes');

require('./db');

app.use(morgan('dev'));
app.use(helmet());
app.use(bodyParser.json());

app.use(config.apiPrefix, router);

app.use(errorHandler);

app.listen(config.port, () =>
  console.log(`Example app listening on port ${config.port}!`)
);
