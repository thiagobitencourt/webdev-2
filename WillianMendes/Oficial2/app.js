'use strict';

	const express = require('express');
	const bodyParser = require('body-parser');
	const ContaDAO = require('./Conta');
	const app = express();
	const ContaRepo = new ContaDAO();

app.use(bodyParser.json());
app.use ('/', express.static('public'));


app.post('/conta', function(req, res) {
 // console.log(req.body);
  ContaRepo.criarConta(req.body);
  res.send(req.body);
});

app.post('/contas', function(req, res) {
  //console.log("alguém chamou /Conta");
  res.send(ContaRepo.obterTodasAsContas());
});

app.post('/conta/sacar/:id',function(req,res){
	 var Conta = ContaRepo.obterConta(req.params.id);
  if(Conta) {
 		if(ContaRepo.sacar(Conta,req.body.saque)){
  			res.send("foi sacado: "+req.body.saque+ " ainda possui: "+Conta.saldo);
  		}else{
			res.send("valor invalido ou saldo insuficiente");
 	 }
	} else {
    res.status(404).send("conta nao encontrada " + req.params.id);
  }
});

app.post('/conta/depositar/:id',function(req,res){
 var Conta = ContaRepo.obterConta(req.params.id);
  if(Conta) {
  		ContaRepo.depositar(Conta,req.body.deposito);
  		res.send("foi adicionado: "+req.body.deposito+" a conta, total: "+conta.saldo);
  	} else {
    res.status(404).send("conta nao encontrada " + req.params.id);
	}
});


app.post('/conta/tranferencia/:id',function(req,res){
	var Conta= ContaRepo.obterConta(req.params.id);
	var dest=  ContaRepo.obterConta(req.body.destino);
	if(Conta){
		if(ContaRepo.tranferencia(Conta,req.body.valor,dest)){
			res.send("tranferencia realizada com sucesso, tranferencia de "+ req.body.valor+" para conta id: "+req.body.destino);
		} else{
			res.send("valor ou destino invalidos");
			}
	}else{
		res.status(404).send("conta nao encontrada " + req.body.id);
	}
	
});



app.listen(3000, function() {
  console.log("Servidor ouvindo na porta 3000");
});

