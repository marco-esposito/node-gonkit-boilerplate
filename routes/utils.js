'use strict';

const HTTPError = require('../HTTPError');

const wrapAsync = fn => {
  return function(req, res, next) {
    fn(req, res, next).catch(next);
  };
};

const authorize = (req, res, next) => {
  if (!res.user) {
    throw new HTTPError(401, 'Unauthorized');
  }
  next();
};

module.exports = {
  wrapAsync,
  authorize
};
