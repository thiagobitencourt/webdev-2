'use strict';

var resultado = soma(10, 20);
console.log(resultado);


function soma(a, b){
  return a + b;
}

var subtrai = function(a, b){
  return a - b;
}

var resultadoSub = subtrai(20, 10);
console.log(resultadoSub);

function hoistingInterno(){
  console.log("Dentro da function hoisting interno");

  var resultadoDiv = divide(33, 10);
  console.log(resultadoDiv);
  function divide(a, b){
    return a / b;
  }
}

hoistingInterno();
