'use strict';

const express = require('express');
const router = express.Router();
const productActions = require('../actions/produtos');

router.get('/', productActions.obterProdutos);
router.post('/', productActions.criarProduto);
router.get('/:id', productActions.obterProduto);
router.put('/:id', productActions.atualizarProduto);
router.delete('/:id', productActions.removerProduto);

module.exports = router;