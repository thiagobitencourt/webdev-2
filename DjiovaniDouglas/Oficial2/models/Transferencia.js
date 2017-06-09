const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transferenciaSchema = new Schema({
 _id: String,
 origemConta: {
   type: Number,
   required: true
 },
 destinoConta: {
   type: Number,
   required: true
 },
 value: {
   type: Number,
   required: true
}
});

module.exports = mongoose.model('Transferencia', transferenciaSchema);
