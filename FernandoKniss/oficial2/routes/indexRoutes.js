'use strict';


// Define as bibliotecas que iremos utilizar
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Contato = mongoose.model('titular');

// ROTA BUSCAR ============================================
router.get('/api/contas', function(req, res) {
    // utilizaremos o mongoose para buscar todos os contatos no BD
    Contato.find(function(err, titular) {
        // Em caso de erros, envia o erro na resposta
        if (err)
            res.send(err)
        // Retorna todos os contatos encontrados no BD
        res.json(titular);
    });
});

// ROTA CRIAR =============================================
router.post('/api/contas', function(req, res) {
    // Cria um contato, as informações são enviadas por uma requisição AJAX pelo Angular
    Contato.create({
        nome : req.body.nome,
        cpf: req.body.cpf,
        email : req.body.emai,
        numero : req.body.numero,
        saldoAtual : req.body.saldoAtual,
        done : false
    }, function(err, titular) {
        if (err)
            res.send(err);
        // Busca novamente todos os contatos após termos inserido um novo registro
        Contato.find(function(err, titular) {
            if (err)
                res.send(err)
            res.json(titular);
        });
    });

});

// ROTA DELETAR 
router.delete('/api/contas/:titular_id', function(req, res) {
    // Remove o contato no Model pelo parâmetro _id
    Contato.remove({
        _id : req.params.titular_id
    }, function(err, titular) {
        if (err)
            res.send(err);
        // Busca novamente todos os contatos após termos removido o registro
        titular.find(function(err, titular) {
            if (err)
                res.send(err)
            res.json(titular);
        });
    });
});

// ROTA EDITAR
router.get('/api/contas/:titular_id', function(req, res) {
    // Busca o contato no Model pelo parâmetro id
    Contato.findOne({
        _id : req.params.contato_id
    }, function(err, titular) {
        if (err)
            res.send(err);
        res.json(titular);
    });
});

// ROTA ATUALIZAR ==========================================
router.put('/api/contas/:titular_id', function(req, res) {
    // Busca o contato no Model pelo parâmetro id
    var contasData = req.body;
    var id = req.params.titular_id;

    Contato.update(
        {_id: id },
        contasData,
        { upsert: true},
        function(err, titular) {
            if (err) res.send(err);
            res.json(titular);
    });

});

// DEFININDO NOSSA ROTA PARA O ANGULARJS/FRONT-END =========
router.get('/', function(req, res) {
    // Carrega nossa view index.html que será a única da nossa aplicação
    // O Angular irá lidar com as mudanças de páginas no front-end
    res.sendfile('./public/index.html');
});

module.exports = router;
