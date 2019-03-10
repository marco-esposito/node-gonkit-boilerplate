'use strict';
const jwt = require('jsonwebtoken');

const User = require('./models/userModel');

module.exports = async (req, res, next) => {
  const authHeaders = req.get('Authorization');
  const authType = authHeaders ? authHeaders.split(' ')[0] : null;
  const authJwt = authHeaders ? authHeaders.split(' ')[1] : null;
  if (authType !== 'Bearer' || !authJwt) return next();

  let jwtDecoded;
  try {
    jwtDecoded = jwt.verify(authJwt, process.env.JWT_SECRET);
    res.user = await User.findOne({ userid: jwtDecoded.userid });
  } catch (error) {
    return next(error);
  }

  next();
};
