'use strict';

const express = require('express');
const production = require('/production');
const mongoose = require('mongoose');
const router = express.Router();
mongoose.connect('mongodb://localhost/AppProduction');

router.get('/production', function(req, res){
  production.find(function(err, productions) {
      if(err){
        res.send(err);
      }else{
        res.json(productions);
      }
  });
});

router.post('/production', function(req, res){
  var newproduction = new production();
  newproduction.name = req.body.name;
  newproduction.code = req.body.code;
  newproduction.quant = req.body.quant;
  newproduction.disp = req.body.disp;

  newproduction.save(function(error) {
      if(error){
        res.send(error);
      }else{
        res.json({ message: 'Created production!' });
      }
  });
});

router.get('/production/:id', function(req, res){
  production.findById(req.params.id, function(error, production) {
      if(error){
        res.send(error);
      }else{
        res.json(production);
      }
  });
});

router.put('/production/:id', function(req, res){
  production.findById(req.params.id, function(error, production) {
      if(error)
          res.send(error);
      production.name = req.body.name;
      production.code = req.body.code;
      production.quant = req.body.quant;
      production.disp = req.body.disp;
      production.save(function(error) {
          if(error)
              res.send(error);
          res.json({ message: 'Production Updated !' });
      });
  });
});

router.delete('/production/:id', function(req, res){
  production.remove({_id: req.params.id}, function(error){
      if(error){
        res.send(error);
      }else{
        res.json({ message: 'Production deleted !'});
      }
  });
});

module.exports = router;