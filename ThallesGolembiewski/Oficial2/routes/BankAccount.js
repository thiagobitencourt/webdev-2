const Account = require('../models/BankAccount');

const ObjectId = require('mongoose').Types.ObjectId;

module.exports = {

  create: ((req, res) => {
    const account = new Account({
      _id: new ObjectId(),
      name: req.body.name,
      cpf: req.body.cpf,
      email: req.body.email,
    });

    Account.save().then(account => {
      res.send('Conta criada com sucesso!');
    });
  }),

  get: ((req, res) => {
    Account.findOne({ _id: new ObjectId(req.params.id) }, (err, account) => {
      if(!account) {
        res.status(404).send('Conta não existe');
      } else {
        res.send(account);
      }
    });
  }),

  update: ((req, res) => {
    const account = new Account({
      _id: new ObjectId(req.params.id),
      email: req.body.email
    });

    Account.findByIdAndUpdate(new ObjectId(req.params.id), account, (err, updateAccount) => {
      if (err) throw err;
      console.log('Conta atualizado com sucesso');
      res.send(updateAccount);
    });
  }),

  delete: ((req, res) => {
    Account.findByIdAndRemove(new ObjectId(req.params.id), (err) => {
      if (err) throw err;
      res.send('Conta removida com sucesso');
    });
  })
};
