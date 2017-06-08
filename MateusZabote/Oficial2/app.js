

// var mongoose = require('mongoose');
//     mongoose.connect('mongodb://localhost:27017/teste1');
//    var Conta = require('./MateusZabote/Oficial2/models/conta');


var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8000;
var router  = express.Router();

router.use(function(req, res, next) {
    console.log('Algo está acontecendo aqui!');
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'API FUNCIONANDO' });
});

router.route('/conta')

app.use('/api', router);

app.listen(port);
console.log('Iniciando a aplicação na porta ' + port);
