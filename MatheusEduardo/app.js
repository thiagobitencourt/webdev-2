'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const usuarioRepo = require('./routes/usuarios');

app.use(bodyParser.json());
app.use('/', express.static('public'));

mongoose.connect('mongodb://matheus:baguvix@ds159880.mlab.com:59880/product-api');

mongoose.connection.once('open', () => {
  console.log('Connected succesfully!');

  app.post('/login', usuarioRepo.autenticarUsuario);
  
  app.get('/usuarios', usuarioRepo.obterUsuarios);
  app.get('/usuarios/:username', usuarioRepo.obterUsuario);
  app.post('/usuarios', usuarioRepo.criarUsuario);
  app.put('/usuarios/:username', usuarioRepo.atualizarUsuario);
  app.delete('/usuarios/:username', usuarioRepo.removerUsuario);

  app.post('/products', produtoRepo.criarProduto);
  app.get('/products', produtoRepo.obterProdutos);
  app.get('/products/:id', produtoRepo.obterProduto);
  app.put('/products/:id', produtoRepo.atualizarProduto);
  app.delete('/products/:id', produtoRepo.removerProduto);

  app.listen(3000, () => console.log('Servidor ouvindo na porta 3000.'));
});

