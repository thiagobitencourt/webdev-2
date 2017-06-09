const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const contaBancaria = require('./routes/contaBancaria');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017/oficial2');

mongoose.connection.once('open', () => {
  console.log('Connected to the database!');

  app.use(bodyParser.json());
  app.use('/assets', express.static(path.join(__dirname, 'node_modules')));
  app.use('/public', express.static(path.join(__dirname, 'public')));
  app.use('/contaBancaria', contaBancaria);

  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  });

  app.listen(8080, () => console.log('Listening on port 8080'));
});
