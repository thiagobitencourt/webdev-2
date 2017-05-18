'use strict';

const produto = require('./produto');
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const produtoRepository = new produto();
app.use(bodyParser.json());

app.get('/produto', function(req, res){
  var arrayProdutos = produtoRepository.obterTodosProdutos();
  if(arrayProdutos[0]){
    res.send(arrayProdutos);
  }else{
    res.status(404).send("Nenhum produto cadastrado !");
  }
});

app.post('/produto', function(req, res){
  if(req.body){
    produtoRepository.criarProduto(req.body);
    res.send("O produto foi cadastrado com sucesso");
  }else{
    res.send("Está faltando informação para cadastro !");
  }
});

app.get('/produto/:id', function(req, res){
  var produto = produtoRepository.obterProduto(req.params.id);
  if(produto){
    res.send(produto);
  } else {
    res.status(404).send("Não foi encontrado o produto com id: "+req.params.id);
  }
  // res.send(req.params.username);
});

app.put('/produto/:id', function(req, res){
  var alterou = produtoRepository.alterarProduto(req.params.id, req.body);
  if(alterou){
      res.send("Produto foi alterado com sucesso");
  }else{
      res.status(404).send("Produto não foi encontrado");
  }
});

app.delete('/produto/:id', function(req, res){
  var sucesso = produtoRepository.removerProduto(req.params.id);
  if(sucesso){
    res.send("O produto foi removido com sucesso");
  }else{
    res.status(404).send("O produto não está cadastrado");
  }
});

app.listen(3000, function(){
  console.log("Example app listening on port 3000!");
});
