'use strict';

const usuarioDAO = require('./usuario');
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const usuarioRepo = new usuarioDAO();
app.use(bodyParser.json());
//var usu = new Usuario();
//console.log(usu);

var user = {
  username: 'xblade70',
  password: '33778833'
}

app.get('/usuario', function(req, res){
  var arrayDeUsuarios = usuarioRepo.obterTodosOsUsuarios();
  if(arrayDeUsuarios[0]){
    res.send(usuarioRepo.obterTodosOsUsuarios());
  }else{
    res.status(404).send("Nenhum usuario encontrado !");
  }
});

app.post('/usuario', function(req, res){
  usuarioRepo.criarUsuario(req.body);
  res.send(req.body);
});

app.get('/usuario/:username', function(req, res){
  var usuario = usuarioRepo.obterUsuario(req.params.username);
  if(usuario){
    res.send(usuario);
  } else {
    res.status(404).send("Não encontramos o usuario: "+req.params.username);
  }
  // res.send(req.params.username);
});

app.delete('/usuario/:username', function(req, res){
  var sucesso = usuarioRepo.removerUsuario(req.params.username);
  if(sucesso){
    res.send("O usuario foi removido com sucesso");
  }else{
    res.send("O usuário não foi encontrado");
  }
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});
// var usuarioValido = usuarioRepo.autenticarUsuario(user);
// if(usuarioValido){
//   console.log("Login efetuado com sucesso");
// }else{
//   console.log("Nome de usuário ou senha incorretos");
// }

app.listen(3000, function(){
  console.log("Example app listening on port 3000!");
});
