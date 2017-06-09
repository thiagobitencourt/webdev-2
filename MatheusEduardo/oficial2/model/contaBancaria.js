
const mongoose = require('mongoose');
const Types = mongoose.Schema.Types;

const contaSchema = new mongoose.Schema({
  _id: Types.ObjectId,
  titular: Types.String,
  cpf: Types.String,
  email: Types.String,
  numero: Types.Number,
  saldoAtual: Types.Number
});

module.exports = mongoose.model('Conta', contaSchema);

