'use strict';

const express = require('express');
const conta = require('../models/conta');
const mongoose = require('mongoose');
const router = express.Router();
mongoose.connect('mongodb://localhost/apiOficial2');

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
  var newconta = new conta();
  newconta.nomeTitular = req.body.nomeTitular;
  newconta.cpfTitular = req.body.cpfTitular;
  newconta.emailTitular = req.body.emailTitular;
  newconta.numeroDaConta = req.body.numeroDaConta;
  newconta.saldo = req.body.saldo;

  newconta.save(function(error) {
      if(error){
        res.send(error);
      }else{
        res.json({ message: 'conta criada!' });
      }
  });
});

router.get('/conta/:id', function(req, res){
  conta.findById(req.params.id, function(error, conta) {
      if(error){
        res.send(error);
      }else{
        res.json(conta);
      }
  });
});

router.put('/conta/:id', function(req, res){
  conta.findById(req.params.id, function(error, conta) {
      if(error)
          res.send(error);
      conta.nomeTitular = req.body.nomeTitular;
      conta.cpfTitular = req.body.cpfTitular;
      conta.emailTitular = req.body.emailTitular;
      conta.numeroDaConta = req.body.numeroDaConta;
      conta.saldo = req.body.saldo;
      conta.save(function(error) {
          if(error)
              res.send(error);
          res.json({ message: 'Conta Atualizada!' });
      });
  });
});

router.delete('/conta/:id', function(req, res){
  conta.remove({_id: req.params.id}, function(error){
      if(error){
        res.send(error);
      }else{
        res.json({ message: 'Conta excluída com Sucesso! '});
      }
  });
});

module.exports = router;
