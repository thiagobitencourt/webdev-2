'use strict';

const mongoose = require('mongoose');
const Types = mongoose.Types;
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  id: Types.ObjectId,
  username: { type: Types.String, required: true, unique: true },
  password: { type: Types.String, required: true },
  age: Number,
  email: Types.String
});

module.exports = mongoose.model('Usuario', usuarioSchema);