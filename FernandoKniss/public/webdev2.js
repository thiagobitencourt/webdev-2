'use strict';

app = angular.module('webdev-2')
  .service('servicoUsuarios', function($http) {
    var incrementaId = 1;
    var usuarios = [

        {
          id: incrementaId++,
          username = "Kratos",
          password = "666",
          age = "25",
          email = "guerra@gmail.com"
        },
        {
          id: incrementaId++,
          username = "Ze da Penha",
          password = "111111",
          age = "10",
          email = "ze@gmail.com"
        },
        {
          id: incrementaId++,
          username: "tibursio",
          password: "12345",
          age: 89,
          email: "tibursio@quase.com"
        },
        {
          id: incrementaId++,
          username = "Fernando",
          password = "123123",
          age = "20",
          email = "fernando@gmail.com"
        }

      ];

      return {
      obterUsuarios: function() {
        return $http.get('http://localhost:3000/usuario');
      },
      salvarUsuario: function(usuario) {
        // if(!usuario._id) {
        return $http.post('http://localhost:3000/usuario', usuario);
        //   usuario.id = incrementaId++; // Não vai mais existir
        //   usuarios.push(usuario);// Não vai mais existir
        // } else {
        return $http.put('http://localhost:3000/usuario/' + usuario._id, usuario)
            /* Não vai mais existir
          var usuarioAtualizar = usuarios.find(function(user) {
            return user.id === usuario.id;
          });
          var usuarioIndex = usuarios.indexOf(usuarioAtualizar);
          if(usuarioIndex > -1) {
            usuarios.splice(usuarioIndex, 1, usuario);
          } */
        // }
      },
      excluirUsuario: function(usuario) {
        var usuarioIndex = usuarios.indexOf(usuario);
        if(usuarioIndex > -1) {
          usuarios.splice(usuarioIndex, 1);
        }
      }
    }
  });

    //   $scope.adicionarUsuario = function() {
    //     console.log("Adicionar usuario");
    //     $scope.adicionandoUsuario = true;
    //   }
    //
    //   $scope.excluirUsuario = function() {
    //     console.log("Excluir usuario");
    //   }
    //
    //   $scope.editarUsuario = function() {
    //     console.log("Editar usuario");
    //   }
    //
    //   $scope.salvarNovoUsuario = function(usuario) {
    //     console.log(usuario);
    //     usuario.id = incrementaId++;
    //     $scope.usuarios.push(usuario);
    //     $scope.novoUsuario = undefined;
    //     $scope.adicionandoUsuario = false;
    //   }
    //
    //   $scope.selecionaUsuario = function(usuario) {
    //     $scope.usuarios.forEach(function(user) {
    //       user.selecionado = false;
    //     })
    //     usuario.selecionado = !usuario.selecionado;
    //   }
    //
    // })
