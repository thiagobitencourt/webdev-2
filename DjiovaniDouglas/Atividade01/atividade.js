'use strict';

/*
Questão 6:
Usando a sintaxe da linguagem JavaScript, crie um objeto com um atributo que tenha um valor do tipo string,
um atributo do tipo number e um atributo com valor do tipo array. Atribua este objeto a uma constante.
*/
const foo = {
  chave: 'valor string',
  atributoInt: 33,
  atributoArray: [],
  atributoFunc: function(){}
};

/*
Questão 7:
Usando a sintaxe da linguagem JavaScript, defina uma função que recebe como parâmetro dois valores e que retorna
um objeto que armazena os valores recebidos nos atributos a e b. Execute esta função e imprima o resultado no console.
*/

function questaoSete(valor1, valor2){
  var objetoDeRetorno = {
    a:valor1,
    b:valor2
  };
  return objetoDeRetorno;
}

var valorRetorno = questaoSete(5, "seis");
console.log(valorRetorno);
