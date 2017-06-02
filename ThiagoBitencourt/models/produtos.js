'use strict';

// nome, codigo, quantidade, disponivel
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const produtoSchema = new Schema({
  nome: { type: String, required: true },
  codigo: { type: String, required: true, unique: true },
  quantidade: Number,
  disponivel: Boolean
});

const Produto = mongoose.model('Produto', produtoSchema);
module.exports = Produto;
