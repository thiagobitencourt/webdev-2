'use strict';

const port = 3000;

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())

app.get('/', function(req, res) {
  console.log('Alguém chamou /');
  res.send('Olá...');
});

app.get('/usuario', function(req, res) {
  console.log('alguém chamou /usuario');
  const usuario = {
    username: 'nome',
    password: 'senha'
  }
  res.send(usuario);
});

app.post('/usuario', (req, res) => {
  console.log(req.body);
  res.send('Fine!');
});

app.listen(port, function() {
  console.log(`Servidor ouvindo na porta ${port}`);
});
