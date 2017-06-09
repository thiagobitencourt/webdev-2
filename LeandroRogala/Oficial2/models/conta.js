var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contaSchema = new Schema({
    nomeTitular: String,
    cpfTitular: String,
    emailTitular: String,
    numeroDaConta: Number,
    saldo: Number
});

module.exports = mongoose.model('Conta', contaSchema);
