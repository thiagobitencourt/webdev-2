var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Nome do titular da conta
 * CPF do titular da conta
 * email do titular da conta
 * Um número para esta conta que deverá ser gerado pelo servidor (Este número não é o ID)
 * O saldo atual da conta
 */
var contaSchema = new Schema({
  nomeTitular: String,
  cpfTitular: String,
  email: String,
  nrConta: String,
  saldoAtual: Number
});

module.exports = mongoose.model('Conta', contaSchema);
