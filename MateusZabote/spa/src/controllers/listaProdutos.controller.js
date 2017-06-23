angular
  .module('angularSPA')
  .controller('listaProdutosController',
    function($scope, $state, manterProdutosServico) {
      $scope.titulo = "Produto";

      // this.$onInit = function() {
      function carregaListaDeProdutos() {
        console.log('on init')
        // Assincrona, ou seja, retorna uma promessa.
        manterProdutosServico.obterProdutos()
        .then(function(listaDeProdutos) {
          $scope.produto = listaDeProdutos;
        });
      }
      carregaListaDeProdutos();

      $scope.adicionarProduto = function() {
        console.log("vou adicionar um novo produto");
        $state.go('novoProduto');
      }



      $scope.deletarProduto = function(produto){
        manterProdutosServico.deletarProduto(produto)
        .then(function(){
          console.log("produto removido com sucesso! ");
        })
      }

      $scope.editarProduto = function(produto){

        var param = {
          produto: angular.copy(produto)
        }

        $state.go("novoProduto", param);

      }
    })
