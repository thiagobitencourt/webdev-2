'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const UsuarioDAO = require('./usuarioDAO');

const usuarioRepo = new UsuarioDAO();

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Eu acessei a url no caminho /');
});

app.post('/login', (req, res) => {
  const sucesso = usuarioRepo.autenticarUsuario(req.body.username, req.body.password);
  if(sucesso) {
    res.send('Usu�rio autenticado com sucesso!');
  } else {
    res.status(400).send('Nome de usu�rio ou senha est�o incorretos');
  }
});

app.get('/usuario', (req, res) => {
  console.log('Algu�m chamou um usu�rio.');
  res.send(usuarioRepo.obterUsuarios());
});

app.get('/usuario/:username', (req, res) => {
  const usuario = usuarioRepo.obterUsuario(req.params.username);
  if(usuario) {
    res.send(usuario);
  } else {
    res.status(404).send(`Usu�rio ${req.params.username} n�o encontrado.`);
  }
});

app.post('/usuario', (req, res) => {
  const updatedUserList = usuarioRepo.criarUsuario(req.body);
  res.send(updatedUserList);
});

app.put('/usuario/:username', (req, res) => {
  const updatedUser = usuarioRepo.updateUsuario(req.params.username, req.body);
  if(updatedUser) {
    res.send(updatedUser);
  } else {
    res.send('N�o foi poss�vel alterar o usu�rio.');
  }
});

app.delete('/usuario/:username', (req, res) => {
  const hasRemovedSuccesfully = usuarioRepo.removerUsuario(req.params.username);
  if(hasRemovedSuccesfully) {
    res.send('Usu�rio removido com sucesso!');
  } else {
    res.send(`N�o consegui remover o usu�rio ${req.params.username}`);
  }
});

app.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000.');
});