const express = require('express');
const router = express.Router();
const ContaBancaria = require('../model/contaBancaria');
const ObjectId = require('mongoose').Types.ObjectId;
router.get('/', (req, res) => {
  ContaBancaria.find().then(results => {
    res.send(results);
  });
});

router.post('/', (req, res) => {
  const newContaBancaria = new ContaBancaria({
    _id: new ObjectId(),
    titular: req.body.titular,
    cpf: req.body.cpf,
    email: req.body.email,
    numero: req.body.numero,
    saldoAtual: req.body.saldoAtual
  });
  
  newContaBancaria.save((err, result) => {
    if(err) throw err;
    ContaBancaria.find((e, results) => {
      if(e) throw e;
      res.send(results);
    });
  });
});

router.get('/:id', (req, res) => {
  ContaBancaria.findById(req.params.id, (err, result) => {
    if(err) throw err;
    res.send(result);
  });
});

router.put('/:id', (req, res) => {
  ContaBancaria.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
    if(err) throw err;
    res.send(result);
  });
});

router.delete('/:id', (req, res) => {
  ContaBancaria.findByIdAndRemove(req.params.id, (err, res) => {
    if(err) throw err;
    res.send(`Conta removida com sucesso!`);
  });
});

router.post('/:id/deposito', (req, res) => {
  const deposito = {
    valor: req.body.valor,
    contaDeOrigem: req.body.contaOrigem
  };

  ContaBancaria.findOneAndUpdate({
    numero: deposito.contaDeOrigem 
  }, {
    $inc: { saldoAtual: deposito.valor }
  }, (err, result) => {
    if(err) throw err;
    res.send(result);
  });
});

router.post('/:id/saque', (req, res) => {
  const saque = {
    valor: req.body.valor,
    contaDeOrigem: req.body.contaOrigem
  };

  ContaBancaria.findOneAndUpdate({
    numero: saque.contaDeOrigem 
  }, {
    $inc: { saldoAtual: - saque.valor }
  }, (err, result) => {
    if(err) throw err;
    res.send(result);
  });
});

router.post('/:id/transferencia', (req, res) => {
  const transferencia = {
    valor: req.body.valor,
    contaDeOrigem: req.body.contaOrigem,
    contaDeDestino: req.body.contaDestino
  };

  ContaBancaria.findOneAndUpdate({ numero: transferencia.contaDeOrigem }, {
    $inc: { saldoAtual: - transferencia.valor }
  }).then(queryRes => {

    ContaBancaria.findOneAndUpdate({
      numero: transferencia.contaDeDestino
    }, { $inc: { saldoAtual: transferencia.valor } }, 
    (e, resultado) => {
      if(e) throw e;
      res.send(`Transferência realizada com sucesso!`);
    });
  });  
});

module.exports = router;