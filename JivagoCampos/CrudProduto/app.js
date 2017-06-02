'use strict';
const express = require('express');
const bodyParser = require("body-parser");

const produto = require('./produto');
const app = express();
app.use(bodyParser.json());
const produtoRepo = new produto();


app.get('/produto', function(req, res){
  var arrayProdutos = produtoRepo.obterTodosProdutos();
  if(arrayProdutos[0]){
    res.send(arrayProdutos);
  }else{
    res.status(404).send("Nenhum produto encontrado");
  }
});

app.get('/produto/:id', function(req, res){
  var produto = produtoRepo.obterProduto(req.params.id);
  if(produto){
    res.send(produto);
  } else {
    res.status(404).send("Nenhum produto encontrado com id: "+req.params.id);
  }
});


app.post('/produto', function(req, res){

    produtoRepo.criarProduto(req.body);
    res.send("O produto foi cadastrado");

});

app.put('/produto/:id', function(req, res){
 var alterou = produtoRepo.alterarProduto(req.params.id, req.body);
      res.send("Produto foi alterado");

});

app.delete('/produto/:id', function(req, res){
  var sucesso = produtoRepo.removerProduto(req.params.id);

    res.send("O produto foi removido");

});

app.listen(3000, function(){
  console.log("Servidor ouvindo na porta 3000");
});
