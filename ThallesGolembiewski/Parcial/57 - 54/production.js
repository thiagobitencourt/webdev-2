'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var produtoSchema = new Schema({
    name: String,
    code: String,
    quant: Number,
    disp: Boolean
});

module.exports = mongoose.model('Production', produtoSchema);