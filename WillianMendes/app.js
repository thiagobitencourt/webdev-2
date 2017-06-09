'use strict';
/*
const Express = require('express');
const bodyparser=require('body-parser');
const usuarioDAO = require('./usuarioDAO');

const usuario = new usuarioDAO();

const app = Express();
app.use(bodyparser.json());

app.get('/',function(){
	console.log("alguem chamou /")

});


app.get('/usuario',function(req, res){
	console.log("alguem chamou /usurio")
/*	const usuario = {
		username: "nome",
		password: "senha"
		}
		res.send(usuario);
*//*
res.send(usuario.obterTodosUsuarios());
});

app.post('/usuario',function(req,res){
	//console.log(req.body);
	usuario.criarUsuario(req.body);
	res.send("voce chamou em metodod post") 
});

app.get('/usuario/:username', function(req,res){
	var ususario= usuario.obterUsusario(req.params.username);
	if(usuario){res.send(req.params);

	}else{
		res.status(404).send();
	}
});

app.listen(3000,function(){
	console.log('exemplo de app ouvindo a porta 3000!')
});





var usu=new usuarioDAO();

console.log(usu);

var user={
	username: 'willink01',
	password: '12123',
	email:'paulistinhaem@hotmail.com',
	age:20
}

var usuarioValido = usu.autenticar(user);
if (usuarioValido){
	console.log("login com sucesso");
} else {
	console.log("usuario ou senha invalido");
}
*/
const express = require('express');
const bodyParser = require('body-parser');

const UsuarioDAO = require('./usuarioDAO');
const app = express();
// parser para json
//app.use(bodyParser.json());

const usuarioRepo = new UsuarioDAO();
app.use ('/', express.static('public'));

app.get('/', function(req, res) {
  console.log("Alguém chamou /");
  res.send("você acessou a rota /");
});



app.get('/usuario', function(req, res) {
  console.log("alguém chamou /usuario");
  res.send(usuarioRepo.obterTodosOsUsuarios());
});

app.post('/usuario', function(req, res) {
  // 
  usuarioRepo.criarUsuario(req.body);
  res.send(req.body);
  console.log(req.body);
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
