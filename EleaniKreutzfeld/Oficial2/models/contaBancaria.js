'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contaBancariaSchema = new Schema({
    nome: String,
    cpf: String,
    email: String,
    conta: Number,
    saldo: Number
});

module.exports = mongoose.model('ContaBancaria', contaBancariaSchema);
