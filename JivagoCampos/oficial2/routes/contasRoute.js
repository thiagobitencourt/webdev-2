'use strict';

const express = require('express');

const produto = require('../models/contas');
const router = express.Router();

router.get('/conta', function(req, res){
  conta.find(function(err, contas) {
      if(err){
        res.send(err);
      }else{
        res.json(contas);
      }
  });
});

router.post('/conta', function(req, res){
  var newProduto = new produto();
  newProduto.nome = req.body.nome;
  newProduto.codigo = req.body.codigo;
  newProduto.quantidade = req.body.quantidade;
  newProduto.disponivel = req.body.disponivel;

  newProduto.save(function(error) {
      if(error){
        res.send(error);
      }else{
        res.json({ message: 'Produto salvo'});
      }
  });
});

router.get('/conta/:id', function(req, res){
  produto.findById(req.params.id, function(error, produto) {
      if(error){
        res.send(error);
      }else{
        res.json(produto);
      }
  });
});

router.put('/conta/:id', function(req, res){
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
          res.json({ message: 'Produto editado'});
      });
  });
});

router.delete('/conta/:id', function(req, res){
  produto.remove({_id: req.params.id}, function(error){
      if(error){
        res.send(error);
      }else{
        res.json({ message: 'Produto excluido'});
      }
  });
});

module.exports = router;
