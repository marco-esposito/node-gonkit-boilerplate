'use strict';

const HTTPError = require('../HTTPError');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

const getUsers = async (req, res) => {
  const users = await User.find({});
  res.send({
    users
  });
};

const signUp = async (req, res) => {
  const userData = req.body;
  const incompleteBody =
    !userData.userid ||
    !userData.password ||
    !userData.name ||
    !userData.surname;
  if (incompleteBody) throw new HTTPError(400, 'Incomplete body');

  const user = await User.findOne({ userid: userData.userid });
  if (user) throw new HTTPError(400, 'This username already exists!');

  const saltRounds = 10;
  const plaintextPsw = userData.password;
  const hashPsw = await bcrypt.hash(plaintextPsw, saltRounds);
  userData.password = hashPsw;

  const response = await User.create(userData);
  res.status(201).send(response);
};

module.exports = {
  getUsers,
  signUp
};
