"use strict";

const HTTPError = require("../HTTPError");

//NOTE: enable it on the router if you want to test error handling
// Remember to remove
/**
 * Test error handling
 */
const getErrorHandlingTest = async (req, res) => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("promise rejected");
    }, 0);
  });
  throw new HTTPError(404, "HTTP Error Thrown"); //to enable it resolve the above promise
};

const getUsers = async (req, res) => res.send({ users: [] });

const createUser = async (req, res) => {
  res.send({});
};

module.exports = {
  getUsers,
  createUser,
  getErrorHandlingTest
};
