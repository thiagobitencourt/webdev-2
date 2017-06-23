angular.module('angularSPA').controller('novoProdutoController', function($scope, $state, $stateParams,  manterProdutosServico){

  var verificaParametro = function(){
    if($stateParams.produto){
      $scope.novoProduto = $stateParams.produto;
    }
  }

  verificaParametro();

  $scope.salvarNovoProduto = function(novoProduto){
    manterProdutosServico.salvarProduto(novoProduto).then(function(){
      $state.go('listaProdutos');
    }).catch(function(){
      console.log("teste")
    });
  }


  $scope.limparCampos = function(){
    $scope.novoProduto = undefined;
  };

});
