'use strict';

/**
 * Get the users
 * @param {object} req The request
 * @param {object} res the response
 */
const getUsers = (req, res) => res.send({ users: [] });

/**
 * Create new user
 * @param {object} req The request
 * @param {object} res the response
 */
const createUser = (req, res) => {
  return res.send({});
};

module.exports = {
  getUsers,
  createUser,
};