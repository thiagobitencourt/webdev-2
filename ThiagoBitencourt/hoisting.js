'use strict';

var resultadoSoma = soma(10, 20);
console.log(resultadoSoma);

function soma(a, b) {
  return a + b;
}
var subtrai = function(a, b) {
  return a - b;
}
var resultadoSub = subtrai(20, 10);
console.log(resultadoSub);

function hoistingInterno() {
  console.log("dentro da function hoistingInterno");

  var resultadoDiv = divide(33, 10);
  console.log(resultadoDiv);

  function divide(a, b) {
    return a / b;
  }
}
hoistingInterno();
