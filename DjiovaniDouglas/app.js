'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const UsuarioDAO = require('./usuarioDAO');
const app = express();
// parser para json
app.use(bodyParser.json());

const usuarioRepo = new UsuarioDAO();

app.use('/', express.static('public'));

app.post('/login', function(req, res) {
  var sucesso = usuarioRepo.autenticarUsuario(req.body.username, req.body.password);
  if(sucesso) {
    res.send("Usuário autenticado com sucesso!");
  } else {
    res.status(400).send("Nome de usuário ou senha estão incorretos");
  }
});

app.get('/usuario', function(req, res) {
  const todosUsuarios = usuarioRepo.obterTodosOsUsuarios();
  if(todosUsuarios.length) {
    return res.send(todosUsuarios);
  }
  res.send("Nenhum usuário cadastrado!");
});

app.get('/usuario/:username', function(req, res) {
  var usuario = usuarioRepo.obterUsuario(req.params.username);
  if(usuario) {
    res.send(usuario);
  } else {
    res.status(404).send("Não encontramos o usuário " + req.params.username);
  }
});

app.post('/usuario', function(req, res) {
  usuarioRepo.criarUsuario(req.body);
  res.send(req.body);
});

app.delete('/usuario/:username', function(req, res) {
  var sucesso = usuarioRepo.removerUsuario(req.params.username);
  if(sucesso) {
    res.send("Usuário removido com sucesso!");
  } else {
    res.send("Usuário não foi encontrado");
  }
});

app.put('/usuario/:username', function(req, res) {
  var alterou = usuarioRepo.alterarUsuario(req.params.username, req.body);
  if(alterou) {
    res.send("Usuário alterado com sucesso!");
  } else {
    res.send("Usuário não foi encontrado");
  }
});

app.listen(3000, function() {
  console.log("Servidor ouvindo na porta 3000");
});
