'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use('/', express.static('public'));

const usuarioApi = require('./routes/usuarios');
const productApi = require('./routes/produtos');

mongoose.connect('mongodb://localhost:27017/product-api');

mongoose.connection.once('open', () => {
  console.log('Connected succesfully!');

  app.get('/usuarios', usuarioApi.obterUsuarios);
  app.get('/usuarios/:username', usuarioApi.obterUsuario);
  app.post('/usuarios', usuarioApi.criarUsuario);
  app.put('/usuarios/:username', usuarioApi.atualizarUsuario);
  app.delete('/usuarios/:username', usuarioApi.removerUsuario);

  app.post('/produtos', productApi.criarProduto);
  app.get('/produtos', productApi.obterProdutos);
  app.get('/produtos/:id', productApi.obterProduto);
  app.put('/produtos/:id', productApi.atualizarProduto);
  app.delete('/produtos/:id', productApi.removerProduto);

  app.listen(3000, () => console.log('Servidor ouvindo na porta 3000.'));
});

