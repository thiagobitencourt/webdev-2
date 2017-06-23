angular.module('angularSPA').controller('listaProdutosController', function($scope, $state, manterProdutosServico){

  $scope.titulo = "Produtos";

  this.$onInit = function(){
    manterProdutosServico.obterProdutos().then(function(listaDeProdutos){
      $scope.produtos = listaDeProdutos;
    });
  }

  $scope.adicionarProduto = function(){
    $state.go('novoProduto');
  };

  $scope.deletarProduto = function(product){
    manterProdutosServico.deletarProduto(product).then(function(){
    });
  };

  $scope.editarProduto = function(product){
    var obj = {
      produto: angular.copy(product)
    }
    $state.go('novoProduto', obj);
  };

});
