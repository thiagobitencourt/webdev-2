const Transfer = require('../models/conta');
const Account = require('../models/conta');

const ObjectId = require('mongoose').Types.ObjectId;

module.exports = {

 transfer: ((req, res) => {
  Account.findOne({ account: req.sourceAccount }, (err, sourceAccount) => {
    if(!account) { res.status(404).send('Conta Origem não existe');
       return;
    }});
  Account.findOne({ account: req.destinationAccount }, (err, destinationAccount) => {
    if(!account) { res.status(404).send('Conta Destino não existe');
        return;
   }});

   const transfer = new Transfer({
     _id: new ObjectId(),
     sourceAccount: req.body.sourceAccount,
     destinationAccount: req.body.destinationAccount,
     value: req.body.value,
   });

   Transfer.save().then(transfer => { res.send('Transferencia feita com sucesso');
   });

   sourceAccount.balance = sourceAccount.balance - transfer.value;
   Account.findByIdAndUpdate({ account: req.sourceAccount }, sourceAccount, (err, sourceAccountUpdate) => {
   });

   destinationAccount.balance = destinationAccount.balance + transfer.value;
   Account.findByIdAndUpdate({ account: req.sourceAccount }, sourceAccount, (err, sourceAccountUpdate) => {
   });
 })
};
