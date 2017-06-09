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
  var newConta = new conta();
  newConta.nome = req.body.nome;
  newConta.cpf = req.body.cpf;
  newConta.email = req.body.email;
  newConta.numeroConta = req.body.numeroConta;
  newConta.saldo = req.body.saldo;

  newConta.save(function(error) {
      if(error){
        res.send(error);
      }else{
        res.json({ message: 'Conta salva'});
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
      if(error){
          res.send(error);
          return;
        }

          newConta.nome = req.body.nome;
          newConta.cpf = req.body.cpf;
          newConta.email = req.body.email;
          newConta.numeroConta = req.body.numeroConta;
          newConta.saldo = req.body.saldo;
      conta.save(function(error) {
          if(error){
              res.send(error);
              return;
            }
          res.json({ message: 'Conta editada'});
      });
  });
});

router.delete('/conta/:id', function(req, res){
  conta.remove({_id: req.params.id}, function(error){
      if(error){
        res.send(error);
      }else{
        res.json({ message: 'Conta excluida'});
      }
  });
});

module.exports = router;
