angular
  .module('angularSPA')
  .controller('novoProdutoController',
  function($scope, $state, $stateParams, manterProdutosServico) {

    console.log($stateParams);
    if($stateParams.produto){
      console.log("recebi um produto");
      $scope.novoProduto = $stateParams.produto;
    }


    function salvarNovoProduto(produto) {
      console.log(produto);

      manterProdutosServico.salvarProduto(produto)
      .then(function(){
        $state.go('listaProdutos');
      })
      .catch(function(){
        console.log('Não há um produto para ser salvo')
      });
    }

    function limparCampos() {
      $scope.novoProduto = undefined;
    }

    $scope.salvarNovoProduto = salvarNovoProduto;
    $scope.limparCampos = limparCampos;
  })
