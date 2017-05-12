'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const UsuarioDAO = require('./usuario');

const usuarioRepo = new UsuarioDAO();

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Eu acessei a url no caminho /');
});

app.post('/login', (req, res) => {
  const sucesso = usuarioRepo.autenticarUsuario(req.body.username, req.body.password);
  if(sucesso) {
    res.send('Usuário autenticado com sucesso!');
  } else {
    res.status(400).send('Nome de usuário ou senha estão incorretos');
  }
});

app.get('/usuario', (req, res) => {
  console.log('Alguém chamou um usuário.');
  res.send(usuarioRepo.obterUsuarios());
});

app.get('/usuario/:username', (req, res) => {
  const usuario = usuarioRepo.obterUsuario(req.params.username);
  if(usuario) {
    res.send(usuario);
  } else {
    res.status(404).send(`Usuário ${req.params.username} não encontrado.`);
  }
});

app.post('/usuario', (req, res) => {
  usuarioRepo.criarUsuario(req.body);
  res.send(usuarioRepo.obterUsuarios());
});

app.put('/usuario/:username', (req, res) => {
  const updatedUser = usuarioRepo.updateUsuario(req.params.username, req.body);
  if(updatedUser) {
    res.send(updatedUser);
  } else {
    res.send('Não foi possível alterar o usuário.');
  }
});

app.delete('/usuario/:username', (req, res) => {
  const hasRemovedSuccesfully = usuarioRepo.removerUsuario(req.params.username);
  if(hasRemovedSuccesfully) {
    res.send('Usuário removido com sucesso!');
  } else {
    res.send(`Não consegui remover o usuário ${req.params.username}`);
  }
});

app.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000.');
});