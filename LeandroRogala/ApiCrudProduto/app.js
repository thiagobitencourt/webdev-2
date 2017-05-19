'use strict';

const produto = require('./produto');
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://localhost/apiProduto');
app.use(bodyParser.json());

app.get('/produto', function(req, res){
  produto.find(function(err, produtos) {
      if(err){
        res.send(err);
      }else{
        res.json(produtos);
      }
  });
});

app.post('/produto', function(req, res){
  var newProduto = new produto();
  newProduto.nome = req.body.nome;
  newProduto.codigo = req.body.codigo;
  newProduto.quantidade = req.body.quantidade;
  newProduto.disponivel = req.body.disponivel;

  newProduto.save(function(error) {
      if(error){
        res.send(error);
      }else{
        res.json({ message: 'Produto criado!' });
      }
  });
});

app.get('/produto/:id', function(req, res){
  produto.findById(req.params.id, function(error, produto) {
      if(error){
        res.send(error);
      }else{
        res.json(produto);
      }
  });
});

app.put('/produto/:id', function(req, res){
  produto.findById(req.params.id, function(error, produto) {
      if(error)
          res.send(error);
      produto.nome = req.body.nome;
      produto.codigo = req.body.codigo;
      produto.quantidade = req.body.quantidade;
      produto.disponivel = req.body.disponivel;
      produto.save(function(error) {
          if(error)
              res.send(error);
          res.json({ message: 'Usuário Atualizado!' });
      });
  });
});

app.delete('/produto/:id', function(req, res){
  produto.remove({_id: req.params.id}, function(error){
      if(error){
        res.send(error);
      }else{
        res.json({ message: 'Usuário excluído com Sucesso! '});
      }
  });
});

app.use('/', express.static('public'));

app.listen(3000, function(){
  console.log("Example app listening on port 3000!");
});
