"use strict";

const HTTPError = require("../HTTPError");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const getUsers = async (req, res) => res.send({ users: [] });

const createUser = async (req, res) => {
  const userData = req.body;
  const user = await User.findOne({ userid: userData.userid });
  const incompleteBody =
    !userData.userid ||
    !userData.password ||
    !userData.name ||
    !userData.surname;

  if (user) throw new HTTPError(400, "This username already exists!");
  if (incompleteBody) throw new HTTPError(400, "Incomplete body");

  const saltRounds = 10;
  const plaintextPsw = userData.password;
  const hashPsw = await bcrypt.hash(plaintextPsw, saltRounds);
  userData.password = hashPsw;

  // We don't need the try/catch due to the errorMiddleware
  const response = await User.create(userData);
  res.status(201).send(response);
};

module.exports = {
  getUsers,
  createUser
};
