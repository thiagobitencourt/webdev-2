const Product = require('../models/product');
const ObjectId = require('mongoose').Types.ObjectId;

module.exports = {

  criarProduct: ((req, res) => {
    const product = new Product({
      _id: new ObjectId(),
      nome: req.body.nome,
      codigo: req.body.codigo,
      quantidade: req.body.quantidade,
      disponivel: req.body.disponivel
    });

    product.save().then(product => {
      res.send('Produto criado com sucesso!');
    });
  }),

  obterProducts: ((req, res) => {
    Product.find((err, products) => {
      if (err) throw err;
      res.send(products);
    });
  }),

  obterProduct: ((req, res) => {
    Product.findOne({ _id: new ObjectId(req.params.id) }, (err, product) => {
      if(!product) {
        res.status(404).send('Product não encontrado.');
      } else {
        res.send(product);
      }
    });
  }),

  atualizarProduct: ((req, res) => {

    const product = new Product({
      _id: new ObjectId(req.params.id),
      nome: req.body.nome,
      codigo: req.body.codigo,
      quantidade: req.body.quantidade,
      disponivel: req.body.disponivel
    });

    Product.findByIdAndUpdate(new ObjectId(req.params.id), product, (err, updatedProduct) => {
      if (err) throw err;
      console.log('Produdo atualizado com sucesso!');
      res.send(updatedProduct);
    });
  }),

  removerProduct: ((req, res) => {
    Product.findByIdAndRemove(new ObjectId(req.params.id), (err) => {
      if (err) throw err;
      res.send('Produto removido com sucesso!');
    });
  })
};