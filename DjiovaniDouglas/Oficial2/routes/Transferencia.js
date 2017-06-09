const Transferencia = require('../models/Transferencia');
const conta = require('../models/BancoConta');

const ObjectId = require('mongoose').Types.ObjectId;

module.exports = {

 transferencia: ((req, res) => {
  conta.findOne({ conta: req.origemConta }, (err, origemConta) => {
    if(!conta) {
       res.status(404).send('Conta Origem não existe');
       return;
    }});
  conta.findOne({ conta: req.destinoConta }, (err, destinoConta) => {
    if(!conta) {
       res.status(404).send('Conta Destino não existe');
        return;
   }});

   const transferencia = new Transferencia({
     _id: new ObjectId(),
     origemConta: req.body.origemConta,
     destinoConta: req.body.destinoConta,
     value: req.body.value,
   });

   Transferencia.save().then(transferencia => {
     res.send('Transferencia feita com sucesso');
   });

   origemConta.balance = origemConta.balance - transferencia.value;
   conta.findByIdAndUpdate({ conta: req.sourceconta }, sourceconta, (err, sourcecontaUpdate) => {
   });

   destinoConta.balance = destinoConta.balance + transferencia.value;
   conta.findByIdAndUpdate({ conta: req.sourceconta }, sourceconta, (err, sourcecontaUpdate) => {
   });
 })
};
