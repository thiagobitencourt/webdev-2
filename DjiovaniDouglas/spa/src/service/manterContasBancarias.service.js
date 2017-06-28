angular
  .module('angularSPA')
  .service('manterContasBancariasServico',
    function($q) {
      var listaDeContasBancarias = [];

      var incrementadorDeIdsContasBancarias = 1;

      var servico = {
        obterContasBancarias: obterContasBancarias,
        salvarContasBancarias: salvarContasBancarias,
        deletarContasBancarias: deletarContasBancarias
      }
      return servico;



      function obterContasBancarias() {


        var deferred = $q.defer();
        deferred.resolve(listaDeContasBancarias);
        return deferred.promise;
      }

      function salvarContasBancarias(contaBancaria) {
        var deferred = $q.defer();
        if (contaBancaria) {
          if (contaBancaria._id) {



            var contaBancariaOriginal = listaDeContasBancarias.find(function (contaB) {
              return conta._id === contaBancaria._id;
            })
            var index = listaDeContasBancarias.indexOf(contaBancariaOriginal);
            if (index > -1) {
              listaDeContasBancarias.splice(index, 1, contaBancaria);
            }

          } else {



            contaBancaria._id = incrementadorDeIdsContasBancarias++;
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
