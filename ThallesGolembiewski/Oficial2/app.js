'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use('/', express.static('public'));

const bankAccountApi = require('./routes/BankAccount');
const transferApi = require('./routes/Transfer);

mongoose.connect('mongodb://localhost:5000/Bank');

mongoose.connection.once('open', () => {

  app.post('/Account', bankAccountApi.create);
  app.get('/Account/:id', bankAccountApi.get);
  app.put('/Account/:id', bankAccountApi.update);
  app.delete('/Account/:id', bankAccountApi.delete);

  app.post('/Transfer', transferApi.transfer);
    
  app.listen(3000, () => console.log('Porta 3000'));
});

