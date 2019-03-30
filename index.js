'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const config = require('./config');
const errorHandler = require('./errorMiddleware');
const authHandler = require('./authMiddleware');
const router = require('./routes');

require('./db');

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

app.use(authHandler);

app.use(config.apiPrefix, router);

app.use(errorHandler);

app.listen(config.port, () =>
  console.log(`Example app listening on port ${config.port}!`)
);
