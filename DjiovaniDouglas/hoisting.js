'use strict';

var resultado = soma(10, 20);
console.log(resultado);

function soma(a, b) {
  return a + b;
}

var subtrai = function(a, b) {
  return a - b;
}
var resultadoSub = subtrai(20, 10);
console.log(resultadoSub);

/* Hoisting - O java le todo o codigo primeiro e oq for
função mesmo que esteja abaixo do que esta solicitando a função,
no caso acima é o resultado, ele ira jogar para o inicio.
*/
