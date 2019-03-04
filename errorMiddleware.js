'use strict'

module.exports = (err, req, res, next) => {
  let status = 500;
  let message = err;
  if (err.name === 'HTTPError') {
    status = err.status;
    message = err.message;
  }

  res.status(status).send({ errors: [message] });
  console.error(message);
};