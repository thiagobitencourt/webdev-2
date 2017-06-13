'use strict';

const express = require('express');
var Conta = require('../models/Conta');
const routes = express.Router();

const retiraDaConta = (idConta, montante, res, callBack) => {
  Conta.findOne({_id : idConta}, function (err, data) {
    if (err) throw err;
    let saldoAtual = data.saldoAtual;
    saldoAtual -= montante;
    if(montante < 0) {
      res.json({ error: "Não é possivel realizar movimentação negativas!"})
    } else if(saldoAtual < 0) {
      res.json({ error: "Saldo em conta insuficiente!"});
    } else {
      data.saldoAtual = saldoAtual;
      data.save(function (err, newData) {
        if (err) throw err;
        callBack(newData);
      });
    }
  });
};

const depositoEmConta = (idConta, montante, res) => {
  Conta.findOne({_id : idConta}, function (err, data) {
    if (err) throw err;
    let saldoAtual = data.saldoAtual;
    saldoAtual += (montante * 1);
    if(montante < 0) {
      res.json({ error: "Não é possivel realizar movimentação negativas!"})
    } else {
      data.saldoAtual = saldoAtual;
      data.save(function (err, newData) {
        if (err) throw err;
        res.json(newData);
      });
    }
  });
}

const operacoesHandler = {
  saque: ((req, res) => {
    retiraDaConta(req.body._id, req.body.montante, res, ((newData) => res.json(newData)));
    return res;
  }),
  deposito: ((req, res) => {
    depositoEmConta(req.body._id, req.body.montante, res);
    return res;
  }),
  transferencia: ((req, res) => {
    retiraDaConta(req.body.idOrigem, req.body.montante, res, 
      ((newData) => {
        depositoEmConta(req.body.idDestino, req.body.montante, res);
      })
    );
    return res;
  })
};

routes.post('/saque', operacoesHandler.saque);
routes.post('/deposito', operacoesHandler.deposito);
routes.post('/transferencia', operacoesHandler.transferencia);

module.exports = routes;