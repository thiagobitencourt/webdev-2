
	'use strict';

	var app = angular.module('webdev-2', []);
app.controller('mainController', function($scope) {

		$scope.titulo = "boa noite";

		$scope.usuario={
			id:1,
		username:"teste",
		password:"test",
		age:19,
		email:"te@te"
}

		$scope.adicionarUsuario=function(){
			console.log("adicionar usuario");

		}

	$scope.deletarUsuario=function(){
console.log("deletar usuario");

}
	$scope.editarUsuario=function(){
console.log("editar usuario");

}





			});