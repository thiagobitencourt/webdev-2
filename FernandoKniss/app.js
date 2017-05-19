'use strict';

//const fs = require('fs'); // modulo interno do node

const express = require('express');
const bodyParser = require('body-parser');

const UsuarioDAO = require('./usuarioDAO');
const app = express();
// parser para json
app.use(bodyParser.json());

const usuarioRepo = new UsuarioDAO();


app.use('/', express.static('public'));
// app.get('/', function (req, res) {
//   console.log("Alguem chamou /")
//   res.send('você acessou a rota!');
// });

app.get('/usuario', function(req, res) {
  const todosUsuarios = usuarioRepo.obterTodosOsUsuarios();
  if (todosUsuarios.length) {
    res.send(usuario);
  } else {
     res.status(404).send("Não encontramos o usuário " + req.params.username);
  }
});

app.get('/usuario/:username', function(req, res) {
  var usuario = usuarioRepo.obterUsuario(req.params.username);
  if (usuario) {
    res.send(usuario);
  } else {
    res.status(404).send("Não encontramos o usuário " + req.params.username);
  }
  res.send(req.params);
});

app.post('/usuario', function(req, res) {
// console.log(req.body);
usuarioRepo.criarUsuario(req.body)
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
  if (alterou) {
    res.send("Usuário alterado com sucesso!");
  } else {
    res.send("Usuário não foi encontrado");
  }
});


app.listen(3000, function () {
  console.log('servidor ouvindo a porta 3000!');
});


//  var usu = new Usuario();
//  console.log(usu);
//
// var user = {
//   username: 'fernandokniss',
//   password: '123123'
// };
//
// var usuarioValido = usu.autenticarUsuario(user);
// if (usuarioValido) {
//   console.log("Login efetuado com sucesso");
// } else {
//   console.log("Nome de usuario ou senha incorreto");
// }
