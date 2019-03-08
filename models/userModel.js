"use strict";

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userid: String,
  password: String,
  name: String,
  surname: String,
  birthdate: Date,
  roles: [String],
  status: String,
  email: String,
  phone: String,
  notes: String
});

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
