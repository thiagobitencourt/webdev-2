'use strict';

const Express = require('express');
const Usuario = require('./usuario');

const app = Express();

app.get('/',function(){
	console.log("alguem chamou /")

});


app.get('/usuario',function(req, res){
	console.log("alguem chamou /usurio")

	const usuario = {
		username: "nome",
		password: "senha"
		}
		res.send(usuario);
});

app.listen(3000,function(){
	console.log('exemplo de app ouvindo a porta 3000!')
});





var usu=new Usuario();

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

