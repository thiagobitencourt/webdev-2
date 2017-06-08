'use strict';

const express = require('express');
var Conta = require('../models/Conta');
const routes = express.Router();

const contaHandlers = {
  save: ((req, res) => {
    var conta = new Conta(req.body);
    conta.save((err, data) => {
      if (err) 
        res.json({error : 'Não inserido com sucesso.'});
      else {
        res.json(data)
      }
    });
    return res;
  }),
  delete: ((req, res) => {
    Conta.remove({_id:req.params.id}, function (err, nrRecords, data) {
      if (err)
        res.json({error : 'Não foi possível elimindar o registro.'});
      else 
        res.json(data);
    });
    return res;
  }),
  update: ((req, res) => { 
    Conta.findOne({_id : req.params.id}, function (err, data) {
      if (err) throw err;
      data.nomeTitular = req.body.nomeTitular;
      data.cpfTitular = req.body.cpfTitular;
      data.nrConta = req.body.nrConta;
      data.save(function (err, newData) {
        if (err) throw err;
        res.json(newData);
      });
    });
    return res;
  }),
  get: ((req, res) => {
    Conta.findOne({_id : req.params.id}, function (err, data) {
      if (err) throw err;
      res.json(data);
    });
  }),
  getAll: ((req, res) => {
    Conta.find(function (err, data) {
      return res.json(data);
    });
  })
};

routes.get('/conta', contaHandlers.getAll); 
routes.get('/conta/:id', contaHandlers.get);
routes.post('/conta', contaHandlers.save);
routes.put('/conta/:id', contaHandlers.update);
routes.delete('/conta/:id', contaHandlers.delete);

module.exports = routes;