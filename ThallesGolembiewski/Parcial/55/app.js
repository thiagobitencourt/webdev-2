'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use('/', express.static('public'));

const userApi = require('./routes/users');
const productApi = require('./routes/product');

mongoose.connect('mongodb://localhost:5000/ApiProduct');

mongoose.connection.once('open', () => {

  app.post('/login', userApi.autenticarUsuario);
  
  app.get('/users', userApi.obterusers);
  
  app.get('/users/:username', userApi.obterUsuario);
  
  app.post('/users', userApi.criarUsuario);
  
  app.put('/users/:username', userApi.atualizarUsuario);
  
  app.delete('/users/:username', userApi.removerUsuario);

  app.post('/product', productApi.criarProduct);
  
  app.get('/product', productApi.obterproduct);
  
  app.get('/product/:id', productApi.obterProduct);
  
  app.put('/product/:id', productApi.atualizarProduct);
  
  app.delete('/product/:id', productApi.removerProduct);

  app.listen(3000, () => console.log('Porta 3000'));
});

