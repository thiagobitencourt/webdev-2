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
  res.send(usuarioRepo.obterTodosOsUsuarios());
});

app.post('/usuario', function(req, res){
  usuarioRepo.criarUsuario(req.body);
  res.send(req.body);
});

app.get('/usuario/:username', function(req, res){
  res.send(req.params);
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
