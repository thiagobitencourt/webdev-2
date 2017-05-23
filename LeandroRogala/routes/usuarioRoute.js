'use strict';

const express = require('express');
const router = express.Router();
const usuario = require('../models/usuario');
const usuarioRepo = new usuario();

router.get('/usuario', function(req, res){
  var arrayDeUsuarios = usuarioRepo.obterTodosOsUsuarios();
  if(arrayDeUsuarios[0]){
    res.send(usuarioRepo.obterTodosOsUsuarios());
  }else{
    res.status(404).send("Nenhum usuario encontrado !");
  }
});

router.post('/usuario', function(req, res){
  usuarioRepo.criarUsuario(req.body);
  res.send(req.body);
});

router.get('/usuario/:username', function(req, res){
  var usuario = usuarioRepo.obterUsuario(req.params.username);
  if(usuario){
    res.send(usuario);
  } else {
    res.status(404).send("Não encontramos o usuario: "+req.params.username);
  }
  // res.send(req.params.username);
});

router.put('/usuario/:username', function(req, res){
  var alterou = usuarioRepo.alterarUsuario(req.params.username, req.body);
  if(alterou){
      res.send("Funcionou");
  }else{
      res.send("Usuario não foi encontrado");
  }
});

router.delete('/usuario/:username', function(req, res){
  var sucesso = usuarioRepo.removerUsuario(req.params.username);
  if(sucesso){
    res.send("O usuario foi removido com sucesso");
  }else{
    res.send("O usuário não foi encontrado");
  }
});

router.post('/login', function(req, res){
  var autenticado = usuarioRepo.autenticarUsuario(req.body.username, req.body.password);
  if(autenticado){
    res.send("Usuario autenticado com sucesso");
  }else{
    res.status(400).send("Usuario ou senha invalido");
  }
});
