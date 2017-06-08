'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const ContaDAO = require('./Conta');
const app = express();
// parser para json
//app.use(bodyParser.json());

const ContaRepo = new ContaDAO();
app.use ('/', express.static('public'));


app.listen(3000, function() {
  console.log("Servidor ouvindo na porta 3000");
});