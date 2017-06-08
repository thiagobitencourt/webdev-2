'use strict';

const express = require('express');
const contaBancaria = require('../models/contaBancaria');
const mongoose = require('mongoose');
const router = express.Router();
mongoose.connect('mongodb://localhost/testeContaBancaria');

router.get('/contaBancaria', function(req, res){
  contaBancaria.find(function(err, contaBancarias) {
      if(err){
        res.send(err);
      }else{
        res.json(contaBancarias);
      }
  });
});

router.post('/contaBancaria', function(req, res){
  var newContaBancaria = new contaBancaria();
  newContaBancaria.nome = req.body.nome;
  newContaBancaria.cpf = req.body.cpf;
  newContaBancaria.email = req.body.email;
  newContaBancaria.conta = req.body.conta;
  newContaBancaria.saldo = req.body.saldo;

  newContaBancaria.save(function(error) {
      if(error){
        res.send(error);
      }else{
        res.json({ message: 'Conta Bancaria criado com sucesso!' });
      }
  });
});

router.get('/contaBancaria/:id', function(req, res){
  contaBancaria.findById(req.params.id, function(error, contaBancaria) {
      if(error){
        res.send(error);
      }else{
        res.json(contaBancaria);
      }
  });
});

router.put('/contaBancaria/:id', function(req, res){
  contaBancaria.findById(req.params.id, function(error, contaBancaria) {
      if(error)
          res.send(error);
      contaBancaria.nome = req.body.nome;
      contaBancaria.codigo = req.body.codigo;
      contaBancaria.quantidade = req.body.quantidade;
      contaBancaria.save(function(error) {
          if(error)
              res.send(error);
          res.json({ message: 'Conta Bancaria atualizado com sucesso!' });
      });
  });
});

router.delete('/contaBancaria/:id', function(req, res){
  contaBancaria.remove({_id: req.params.id}, function(error){
      if(error){
        res.send(error);
      }else{
        res.json({ message: 'Conta Bancaria excluído com sucesso! '});
      }
  });
});

module.exports = router;
