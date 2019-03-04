'use strict'

class HTTPError extends Error {
  constructor(status, message) {
    super(message);
    this.name = 'HTTPError';
    this.status = status;
  }
};

module.exports = HTTPError;