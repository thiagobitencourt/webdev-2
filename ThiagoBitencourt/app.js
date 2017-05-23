'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const rotaUsuarios = require('./routes/usuariosRoute');
const rotaProdutos = require('./routes/produtosRoute');

// parser para json
app.use(bodyParser.json());

app.use('/', express.static('public'));
app.use(rotaUsuarios);
app.use(rotaProdutos);

app.listen(3000, function() {
  console.log("Servidor ouvindo na porta 3000");
});
