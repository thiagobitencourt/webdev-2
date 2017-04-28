'use strict'

function criaSomador(somar){
  var x = somar;

  var somador = function(valor){
    return valor + x;
  }

  return somador;
  }

var soma10 = criaSomador(10);
var resultado = soma10(16);

var soma500 = criaSomador(500);

console.log(soma500(10));
console.log(soma10(20));

function fabrica(){

  var obj = {
    criaUmacoisa: funcaoCriaUmaCoisa,
    criaOutraCoisa: funcaoCriaOutraCoisa
  };

  return obj;

  function funcaoCriaUmaCoisa(a){
  }
  function funcaoCriaOutraCoisa(b){
  }
}
