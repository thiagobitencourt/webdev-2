const express = require('express');
const router = express.Router();
const ContaBancaria = require('../model/contaBancaria');

router.get('/', (req, res) => {
  ContaBancaria.find().then(results => {
    res.send(results);
  });
});

router.post('/', (req, res) => {
  const newContaBancaria = new ContaBancaria({
    titular: req.body.titular,
    cpf: req.body.cpf,
    email: req.body.email,
    numero: req.body.numero,
    saldoAtual: req.body.saldoAtual
  });

  newContaBancaria.save().then(result => {
    console.log(result);
    ContaBancaria.find().then(results => {
      res.send(results);
    });
  });
});

router.get('/:numeroConta', (req, res) => {
  ContaBancaria.findOne({ numero: req.params.numeroConta }, (err, result) => {
    if(err) throw err;
    res.send(result);
  });
});

router.put('/:numeroConta', (req, res) => {
  ContaBancaria.findOneAndUpdate({ numero: req.params.numeroConta }, req.body, (err, result) => {
    if(err) throw err;
    res.send(result);
  });
});

router.delete('/:numeroConta', (req, res) => {
  ContaBancaria.findOneAndRemove({ numero: req.params.numeroConta }, (err, res) => {
    if(err) throw err;
    res.send(`Conta ${req.params.numeroConta} removida com sucesso!`);
  });
});

module.exports = router;