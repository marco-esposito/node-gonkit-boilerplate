'use strict';

const atob = require('atob');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const HTTPError = require('../HTTPError');
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

const signIn = async (req, res) => {
  if (!req.get('Authorization'))
    throw new HTTPError(400, 'Basic authentication in header is missing');

  const b64 = atob(
    req
      .get('Authorization')
      .split(' ')
      .pop()
  );
  const [userid, password] = b64.split(':');

  const user = await User.findOne({ userid });
  if (!user) throw new HTTPError(404, 'User not found');

  const areCompatible = await bcrypt.compare(password, user.password);
  if (!areCompatible) throw new HTTPError(401, 'Unauthorized');

  const jwtPayload = {
    userid: user.userid,
    sub: user._id
  };
  const payload = {
    userid,
    jwt: jwt.sign(jwtPayload, process.env.JWT_SECRET),
    name: user.name,
    email: user.email
  };
  res.status(200).send(payload);
};

module.exports = {
  getUsers,
  signUp,
  signIn
};
