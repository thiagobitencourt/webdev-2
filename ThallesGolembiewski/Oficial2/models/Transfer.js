const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transferSchema = new Schema({
  _id: String,
  sourceAccount: { 
    type: Number, 
    required: true
  },
  destinationAccount: { 
    type: Number, 
    required: true
  },
  value: {
    type: Number, 
    required: true
}
});

module.exports = mongoose.model('Transfer', transferSchema);