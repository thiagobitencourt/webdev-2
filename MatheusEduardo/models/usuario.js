'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  id: String,
  username: { type: String, required: true, unique: true },
  password: String,
  age: Number,
  email: String
});

module.exports = mongoose.model('Usuario', usuarioSchema);