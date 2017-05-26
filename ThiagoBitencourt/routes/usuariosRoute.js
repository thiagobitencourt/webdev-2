'use strict';

const express = require('express');
const router = express.Router();

const UsuarioDAO = require('../usuarioDAO');
const usuarioRepo = new UsuarioDAO();

router.get('/usuario', function(req, res) {
  const todosUsuarios = usuarioRepo.obterTodosOsUsuarios();
  res.send(todosUsuarios);
  // if(todosUsuarios.length) {
  //   return res.send(todosUsuarios);
  // }
  // res.send("Nenhum usuário cadastrado!");
});

router.get('/usuario/:username', function(req, res) {
  var usuario = usuarioRepo.obterUsuario(req.params.username);
  if(usuario) {
    res.send(usuario);
  } else {
    res.status(404).send("Não encontramos o usuário " + req.params.username);
  }
});

router.post('/usuario', function(req, res) {
  usuarioRepo.criarUsuario(req.body);
  res.send(req.body);
});

router.delete('/usuario/:username', function(req, res) {
  var sucesso = usuarioRepo.removerUsuario(req.params.username);
  if(sucesso) {
    res.send("Usuário removido com sucesso!");
  } else {
    res.send("Usuário não foi encontrado");
  }
});

router.put('/usuario/:username', function(req, res) {
  var alterou = usuarioRepo.alterarUsuario(req.params.username, req.body);
  if(alterou) {
    res.send("Usuário alterado com sucesso!");
  } else {
    res.send("Usuário não foi encontrado");
  }
});

router.post('/login', function(req, res) {
  var sucesso = usuarioRepo.autenticarUsuario(req.body.username, req.body.password);
  if(sucesso) {
    res.send("Usuário autenticado com sucesso!");
  } else {
    res.status(400).send("Nome de usuário ou senha estão incorretos");
  }
});

module.exports = router;
