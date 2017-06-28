angular
  .module('angularSPA')
  .service('manterContasBancariasServico',
    function($q) {
      var listaDeContasBancarias = [];

      var incrementadorDeIdsContas = 1;

      var servico = {
        obterContasBancarias: obterContasBancarias,
        salvarContasBancarias: salvarContasBancarias,
        deletarContasBancarias: deletarContasBancarias
      }
      return servico;

      //É uma função assincrona, ou seja, retorna uma promessa
      function obterContasBancarias() {
        // return $http.get('/contaBancaria'); //Também é assincrono, ou seja, retorna uma promessa
        var deferred = $q.defer();
        deferred.resolve(listaDeContasBancarias);
        return deferred.promise;
      }

      function salvarContasBancarias(contaBancaria) {
        var deferred = $q.defer();
        if (contaBancaria) {
          if (contaBancaria._id) {
            //devemos atualizar o objeto
            var contaBancariaOriginal = listaDeContasBancarias.find(function (conta) {
              return conta._id === contaBancaria._id;
            })
            var index = listaDeContasBancarias.indexOf(contaBancariaOriginal);
            if (index > -1) {
              listaDeContasBancarias.splice(index, 1, contaBancaria);
            }
          } else {
            //devemos adcionar o objeto
            contaBancaria._id = incrementadorDeIdsContas++;
            listaDeContasBancarias.push(contaBancaria);
          }
            deferred.resolve();
        } else {
            deferred.reject();
        }
        return deferred.promise;
      }

      function deletarContasBancarias(contaBancaria) {
        var deferred = $q.defer();
        const index = listaDeContasBancarias.indexOf(contaBancaria);
        if (index > -1) {
          listaDeContasBancarias.splice(index, 1);
          deferred.resolve();
        }
        return deferred.promise;
      }


      $scope.sacarContaBancaria = function (contaBancaria) {
        
      }

      $scope.transferirContaBancaria = function (contaBancaria) {

      }

      $scope.depositarContaBancaria = function (contaBancaria) {

      }

    });
