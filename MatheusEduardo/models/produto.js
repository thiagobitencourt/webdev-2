const mongoose = require('mongoose');
const Types = mongoose.Types;
const Schema = mongoose.Schema;

const produtoSchema = new Schema({
  _id: Types.ObjectId,
  nome: { 
    type: Types.String, 
    required: true, 
    unique: true 
  },
  codigo: Types.String,
  quantidade: Number,
  disponivel: Boolean
});

module.exports = mongoose.model('Produto', produtoSchema);