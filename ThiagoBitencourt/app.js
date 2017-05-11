'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const UsuarioDAO = require('./usuarioDAO');
const app = express();
// parser para json
app.use(bodyParser.json());

const usuarioRepo = new UsuarioDAO();

app.get('/', function(req, res) {
  console.log("Alguém chamou /");
  res.send("você acessou a rota /");
});

app.get('/usuario', function(req, res) {
  console.log("alguém chamou /usuario");
  res.send(usuarioRepo.obterTodosOsUsuario());
});

app.post('/usuario', function(req, res) {
  // console.log(req.body);
  usuarioRepo.criarUsuario(req.body);
  res.send(req.body);
});

app.listen(3000, function() {
  console.log("Servidor ouvindo na porta 3000");
});
