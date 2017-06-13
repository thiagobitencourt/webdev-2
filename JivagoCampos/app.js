'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const UsuarioDAO = require('./usuarioDAO');
const app = express();
// parser para json
app.use(bodyParser.json());

const usuarioRepo = new UsuarioDAO();

// app.get('/', function(req, res) {
//   console.log("Alguém chamou /");
//   res.send("você acessou a rota /");
// });

app.use('/', express.static('public'));

app.get('/usuario', function(req, res) {
  console.log("alguém chamou /usuario");
  res.send(usuarioRepo.obterTodosOsUsuarios());
});

app.post('/usuario', function(req, res) {
  // console.log(req.body);
  usuarioRepo.criarUsuario(req.body);
  res.send(req.body);
});

app.get('/usuario/:username', function(req, res) {
  var usuario = usuarioRepo.obterUsuario(req.params.username);
  if(usuario) {
    res.send(usuario);
  } else {
    res.status(404).send("Não encontramos o usuário " + req.params.username);
  }
});

app.listen(3000, function() {
  console.log("Servidor ouvindo na porta 3000");
});
