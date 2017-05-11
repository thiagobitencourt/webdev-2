'use strict';

console.log("Olá Mundo!");

var x = 10;
var y = "algumNome"

//let z = 22;
//let k = "e nozes"

const c = 10;

console.log(c);

//função

function liberarOsAlunosDaAula() {
  console.log(y);
  return 20;
}

var resposta = liberarOsAlunosDaAula(50);
//console.log(resposta);

var func2 = function(a){
  console.log(a);
}

func2("oi");

var minhaFuncao = liberarOsAlunosDaAula;
minhaFuncao("Não");
