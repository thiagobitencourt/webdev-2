angular
.module('angularSPA')
.controller('novoProdutoController',
  function($scope, $state, $stateParams, manterProdutosServico) {

console.log($stateParams);

if($stateParams.produto) {
  console.log("recebi um produto por parametro");
  $scope.novoProduto  = $stateParams.produto;
}

    function salvarNovoProduto(produto) {
      console.log(produto);
      // Mecanismo para salvar o novo produto
      manterProdutosServico.salvarProduto(produto).then(function() {
        $state.go('listaProdutos');
      })
      .catch(function () {
        console.log('Não há produtos para serem salvos')
      });
    }

    function limparCampos() {
      $scope.novoProduto = undefined;
    }

    $scope.salvarNovoProduto = salvarNovoProduto;
    $scope.limparCampos = limparCampos;
  })
