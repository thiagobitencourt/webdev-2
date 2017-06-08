'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const produtoDAO = require('./produto');
const app = express();
const produtoRepo = new produtoDAO();

app.use(bodyParser.json());
app.use ('/', express.static('public'));

app.get('/', function(req, res) {
  console.log("Alguém chamou /");
  res.send("você acessou a rota /");
});

app.get('/usuario/produto',function(req,res){
res.send(produtoRepo.obterTodosOsProdutos());
});

app.post('/usuario/produto',function(req,res){
	//console.log(req.body);
  produtoRepo.criarProduto(req.body);
  res.send(req.body);
})

app.get('/usuario/produto/:id',function(req,res){
var produto = produtoRepo.obterProduto(req.params.id);
  if(produto) {
    res.send(produto);
  } else {
    res.status(404).send("Não encontramos o produto " + req.params.id);
  }
});

app.post('/usuario/produto/:id',function(req,res){

});

app.delete('/usuario/produto/:id',function(req,res){

});





app.listen(3000, function() {
  console.log("Servidor ouvindo na porta 3000");
});