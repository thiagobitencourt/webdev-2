'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  nome: { type: String, required: true },
  codigo: { type: String, required: true, unique: true },
  quantidade: Number
});

const User = mongoose.model('User', userSchema);
module.exports = User;
