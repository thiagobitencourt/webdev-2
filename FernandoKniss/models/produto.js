const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const produtoSchema = new Schema({
  _id: String,
  nome: {
    type: String,
    required: true,
    unique: true
  },
  codigo: String,
  quantidade: Number,
  disponivel: Boolean
});


const Produto = mongoose.model('Produto', produtoSchema);
module.exports = Produto;
