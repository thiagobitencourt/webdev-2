const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const contaBancaria = require('./routes/contaBancaria');

const app = express();

app.use(bodyParser.json());

app.use('/assets', express.static(path.join(__dirname, 'node_modules')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/contaBancaria', contaBancaria);

app.listen(8080, () => console.log('Listening on port 8080'));
