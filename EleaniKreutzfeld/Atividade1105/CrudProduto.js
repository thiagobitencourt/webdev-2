'use strict';

const express = require('express');
const bodyParser = require("body-parser");
const app = express();

const produto = require('./ProdutoObj');
const produtoRepository = new produto();

app.use(bodyParser.json());

app.post('/produto', function(req, res){
  if(req.body){
    produtoRepository.criarProduto(req.body);
    res.send("Produto cadastrado com sucesso!");
  }else{
    res.send("Não foi possível cadastrar o produto.  Favor verificar os dados do produto e tente novamente.");
  }
});

app.get('/produto', function(req, res){
  var arrayProdutos = produtoRepository.obterTodosProdutos();
  if(arrayProdutos[0]){
    res.send(arrayProdutos);
  }else{
    res.status(404).send("Nenhum produto cadastrado!");
  }
});

app.put('/produto/:id', function(req, res){
  var alterou = produtoRepository.alterarProduto(req.params.id, req.body);
  if(alterou){
      res.send("Produto alterado com sucesso!");
  }else{
      res.status(404).send("Produto não existe!");
  }
});

app.delete('/produto/:id', function(req, res){
  var sucesso = produtoRepository.removerProduto(req.params.id);
  if(sucesso){
    res.send("Produto excluído!");
  }else{
    res.status(404).send("Produto não cadastrado!");
  }
});

app.get('/produto/:id', function(req, res){
  var produto = produtoRepository.obterProduto(req.params.id);
  if(produto){
    res.send(produto);
  } else {
    res.status(404).send("O produto do código"+req.params.id+" não existe!");
  }
});
