const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bankAccountSchema = new Schema({
  _id: String,
  name: { 
    type: String, 
    required: true
  },
  cpf: { 
    type: String, 
    required: true,
    unique:true
      
  },
  email: Number,
  account: { 
    type: Number, 
    required: true,
    unique:true
  },
    balance: Number
});

module.exports = mongoose.model('BankAccount', bankAccountSchema);