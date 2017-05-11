'use strict';

const port = 3000;

const express = require('express');
const app = express();

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

app.listen(port, function() {
  console.log(`Servidor ouvindo na porta ${port}`);
});
