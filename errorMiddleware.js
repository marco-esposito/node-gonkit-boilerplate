'use strict';

// This middleware collect the exceptions, so we don't need to use try/catch inside the controllers
// unless we need to throw explicit "HTTPError" error
module.exports = (err, req, res, next) => {
  let status = 500;
  let message = err.message;

  if (err.name === 'HTTPError') {
    status = err.status;
    message = err.message;
  }

  res.status(status).send({ errors: [message] });
  console.error(message);
};
