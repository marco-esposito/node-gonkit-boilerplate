'use strict';

/**
 * Get the users
 * @param {object} req The request
 * @param {object} res the response
 */
const getUsers = (req, res) => res.send({ users: [] });

module.exports = {
  getUsers,
};