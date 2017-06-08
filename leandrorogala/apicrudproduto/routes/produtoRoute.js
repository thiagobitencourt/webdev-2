'use strict';

const express = require('express');
const produto = require('../models/produto');
const mongoose = require('mongoose');
const router = express.Router();
mongoose.connect('mongodb://localhost/apiProduto');

router.get('/produto', function(req, res){
  produto.find(function(err, produtos) {
      if(err){
        res.send(err);
      }else{
        res.json(produtos);
      }
  });
});

router.post('/produto', function(req, res){
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

router.get('/produto/:id', function(req, res){
  produto.findById(req.params.id, function(error, produto) {
      if(error){
        res.send(error);
      }else{
        res.json(produto);
      }
  });
});

router.put('/produto/:id', function(req, res){
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

router.delete('/produto/:id', function(req, res){
  produto.remove({_id: req.params.id}, function(error){
      if(error){
        res.send(error);
      }else{
        res.json({ message: 'Usuário excluído com Sucesso! '});
      }
  });
});

module.exports = router;
