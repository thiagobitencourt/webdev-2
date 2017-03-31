'use strict'; //Permite mostrar alguns logs a + de erros que o javascript normal permite

// console.log('Bem vindo a aula do dia 30/03/2017');

var x = 10;
var y = "qualquercoisa";

//let z = 10;
//let k = "outra string";

const c = 10; //Uma variavel constante só pode ser preenchida na hora da declaração... Ela não muda o valor após declarada
// console.log(c);

//função

function liberarOsAlunosDaAula(algumNome){  //Nao precisa coloca o tipo de retorno da função, retorna qual quer tipo;
  // console.log(algumNome)
  algumNome("ola");
  return false;
}

// var resposta = liberarOsAlunosDaAula('Leandro');
// console.log(resposta);

var minhaFuncao = liberarOsAlunosDaAula; //Pode-se copiar uma função em uma variavel
// minhaFuncao("Não");

var func2 = function(a){  //Pode-se armazena uma função em uma variavel
  console.log(a);
}

// func2("oi");

liberarOsAlunosDaAula(func2); //Mandando uma funcao como parametro
