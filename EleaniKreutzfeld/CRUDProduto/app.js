'use strict';

const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const rotaProdutos = require('./routes/produtosRoute');

app.use(bodyParser.json());

app.use('/', express.static('public'));

app.use(rotaProdutos);

app.listen(3000, function(){
  console.log("Servidor ouvindo a porta 3000!");
});
