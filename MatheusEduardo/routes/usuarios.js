const express = require('express');
const router = express.Router();
const userActions = require('../actions/usuarios');

router.get('/', userActions.obterUsuarios);
router.post('/', userActions.criarUsuario);
router.get('/:id', userActions.obterUsuario);
router.put('/:id', userActions.atualizarUsuario);
router.delete('/:id', userActions.removerUsuario);

module.exports = router;