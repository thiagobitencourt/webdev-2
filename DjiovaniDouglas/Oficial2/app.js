'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use('/', express.static('public'));

const bancoContaApi = require('./routes/BancoConta');
const transferenciaApi = require('./routes/Transferencia)';

mongoose.connect('mongodb://localhost:3000/Banco');

mongoose.connection.once('open', () => {

 app.post('/Conta', bancoContaApi.create);
 app.get('/Conta/:id', bancoContaApi.get);
 app.put('/Conta/:id', bancoContaApi.update);
 app.delete('/Conta/:id', bancoContaApi.delete);

 app.post('/Transferencia', transferenciaApi.transferencia);

 app.listen(3000, () => console.log('Porta 3000'));
});
