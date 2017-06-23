angular
  .module('angularSPA')
  .controller('listaProdutosController',
    function ($scope, $state, manterProdutosServico) {

      console.log('Iniciando o listaProdutosController');

      $scope.titulo = "Produtos";

      function carregaListaDeProdutos() {
        //Assincrona, ou seja, retorna uma promessa
        manterProdutosServico.obterProduto()
        .then(function (listaDeProdutos) {
          $scope.produtos = listaDeProdutos;
        });
      }
        carregaListaDeProdutos();

      $scope.adicionarProduto = function () {
        console.log("Vou adicionar um novo produto")
        $state.go('novoProduto');
      }

      $scope.deletarProduto = function (produto) {
        manterProdutosServico.deletarProduto(produto)
        .then(function () {
          console.log("Produto removido com sucesso!!")
        })
      }
      
      $scope.editarProduto = function (produto) {
        var param = {
          produto: angular.copy(produto)
        }
        $state.go('novoProduto', param);
      }
    })
