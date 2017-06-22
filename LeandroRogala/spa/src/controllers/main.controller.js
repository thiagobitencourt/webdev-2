angular.module('angularSPA').controller('mainController', function($scope, $state, manterUsuariosServico){

  $scope.titulo = "Usuários";

  this.$onInit = function(){
    manterUsuariosServico.obterUsuarios().then(function(listaDeUsuarios){
      $scope.usuarios = listaDeUsuarios;
    });
  }

  // $scope.usuarios = [
  //   {
  //     _id: '123',
  //     username: 'fulano',
  //     password: 'senha123',
  //     age: 18,
  //     email: 'fulano@mail.com'
  //   }
  // ];

  $scope.adicionarUsuario = function(){
    $state.go('novoUsuario');
  };

});
