'use strict';

console.log("Olá mundo!");

var x = 10;
// console.log(x);
x = "qualquercoisa";
// let z = 10;
// let k = "outra string";
const c = 10;
// c = 20;
// console.log(c);

// função
function liberarOsAlunosDaAula(algumNome) {
  console.log(algumNome);
  algumNome("Olá ... ");
  return 20;
}

// var resposta = liberarOsAlunosDaAula(50);
// console.log(resposta);
var func2 = function(a) {
    console.log(a);
}
func2("olá");
liberarOsAlunosDaAula(func2)

// func2("oi");

// var minhaFuncao = liberarOsAlunosDaAula;
// minhaFuncao(func2);
