'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var produtoSchema = new Schema({
    nome: String,
    codigo: String,
    quantidade: Number
});

module.exports = mongoose.model('Produto', produtoSchema);
