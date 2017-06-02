const Produto = require('../models/produto');
const ObjectId = require('mongoose').Types.ObjectId;

module.exports = {

  criarProduto: ((req, res) => {
    const produto = new Produto({
      _id: new ObjectId(),
      nome: req.body.nome,
      codigo: req.body.codigo,
      quantidade: req.body.quantidade,
      disponivel: req.body.disponivel
    });

    produto.save().then(product => {
      res.send(`${product.nome} criado com sucesso!`);
    });
  }),

  obterProdutos: ((req, res) => {
    Produto.find((err, produtos) => {
      if (err) throw err;
      res.send(produtos);
    });
  }),

  obterProduto: ((req, res) => {
    Produto.findOne({ _id: new ObjectId(req.params.id) }, (err, produto) => {
      if(!produto) {
        res.status(404).send('Produto não encontrado.');
      } else {
        res.send(produto);
      }
    });
  }),

  atualizarProduto: ((req, res) => {


    const produto = new Produto({
      _id: new ObjectId(req.params.id),
      nome: req.body.nome,
      codigo: req.body.codigo,
      quantidade: req.body.quantidade,
      disponivel: req.body.disponivel
    });



    Produto.findByIdAndUpdate(new ObjectId(req.params.id), produto, (err, updatedProduto) => {
      if (err) throw err;
      console.log(`Produto ${req.params.id} atualizado com sucesso!`);
      res.send(updatedProduto);
    });
  }),

  removerProduto: ((req, res) => {
    Produto.findByIdAndRemove(new ObjectId(req.params.id), (err) => {
      if (err) throw err;
      res.send(`Produto ${req.params.id} removido com sucesso!`);
    });
  })
};
