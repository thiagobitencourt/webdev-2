'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const usuarioApi = require('./routes/usuarios');
const productApi = require('./routes/produtos');

const app = express();
app.use(bodyParser.json());
app.use('/', express.static('public'));

mongoose.connect('mongodb://localhost:27017/product-api');

mongoose.connection.once('open', () => {
  console.log('Connected succesfully!');

  app.use('/usuario', usuarioApi);
  app.use('/produto', productApi);

  app.listen(3000, () => console.log('Servidor ouvindo na porta 3000.'));
});

