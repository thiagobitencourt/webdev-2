'use strict';

function criaSomador(somar) {
  var x = somar;
  var somador = function(valor) {
    return valor + x;
  }
  return somador;
}

var soma10 = criaSomador(10);
var resultado = soma10(16);

console.log(resultado);
// var soma10 = criaSomador();
// soma10(5); //
