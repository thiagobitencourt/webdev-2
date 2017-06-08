'use strict';

const express = require('express');
var Conta = require('../models/Conta');
const routes = express.Router();

const operacoesHandler = {
  saque: ((req, res) => {
    Conta.findOne({_id : req.body._id}, function (err, data) {
      if (err) throw err;
      let saldoAtual = data.saldoAtual;
      saldoAtual = saldoAtual - req.body.montante;
      if(req.body.montante < 0) {
        res.json({ error: "Não é possivel realizar saques negativos!"})
      } else if(saldoAtual < 0) {
        res.json({ error: "Saldo em conta insuficiente!"});
      } else {
        data.saldoAtual = saldoAtual;
        data.save(function (err, newData) {
          if (err) throw err;
          res.json(newData);
        });
      }
    });
    return res;
  })
};

routes.post('/saque', operacoesHandler.saque);

module.exports = routes;