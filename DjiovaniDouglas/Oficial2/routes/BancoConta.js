const conta = require('../models/BancoConta');

const ObjectId = require('mongoose').Types.ObjectId;

module.exports = {

 create: ((req, res) => {
   const conta = new conta({
     _id: new ObjectId(),
     name: req.body.name,
     cpf: req.body.cpf,
     email: req.body.email,
   });

   conta.save().then(conta => {
     res.send('Conta criada!');
   });
 }),

 get: ((req, res) => {
   conta.findOne({ _id: new ObjectId(req.params.id) }, (err, conta) => {
     if(!conta) {
       res.status(404).send('Conta não existe');
     } else {
       res.send(conta);
     }
   });
 }),

 update: ((req, res) => {
   const conta = new Conta({
     _id: new ObjectId(req.params.id),
     email: req.body.email
   });

   conta.findByIdAndUpdate(new ObjectId(req.params.id), conta, (err, updateconta) => {
     if (err) throw err;
     console.log('Conta atualizado com sucesso!');
     res.send(updateconta);
   });
 }),

 delete: ((req, res) => {
   conta.findByIdAndRemove(new ObjectId(req.params.id), (err) => {
     if (err) throw err;
     res.send('Conta removida com sucesso');
   });
 })
};
