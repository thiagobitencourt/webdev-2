'use strict';

// Contato.js
var mongoose = require('mongoose');

// Cria um novo Schema com os campos que iremos utilizar no model Contato
var TitularSchema = new mongoose.Schema({
  nome: String,
  cpf: String,
  email: String,
  numero: Long,
  saldoAtual: double,
});

//Define o model Contato
mongoose.model('titular', TitularSchema);
