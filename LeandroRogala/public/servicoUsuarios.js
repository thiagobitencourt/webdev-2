'use strict';

app = angular.module('webdev-2')
  .service('servicoUsuarios', function servico() {
    return {
      teste: function() {
        console.log("método teste do serviço servicoUsuarios");
      }
    }
  });
