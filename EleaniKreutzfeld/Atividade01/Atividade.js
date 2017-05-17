'use strict';

/*
Bloco de comentario
*/

// Comentario de uma linha

/*
###6. Usando a sintaxe da linguagem JavaScript, crie um objeto
com um atributo que tenha um valor do tipo string, um atributo
do tipo number e um atributo com valor do tipo array. Atribua
este objeto a uma constante.
*/

const foo = {
  chave: 'valor string',
  atributoInt: 50,
  atributoArray: []
};

/*
###7. Usando a sintaxe da linguagem JavaScript, defina uma
função que recebe como parâmetro dois valores e que
retorna um objeto que armazena os valores recebidos
nos atributos a e b.
Execute esta função e imprima o resultado no console.
*/

function funcaoTeste(val1, val2) {
  var objetoRetorno = {
    a:val1,
    b:val2
  };
  return objetoRetorno;
}

var valorRetorno = funcaoTeste(5, 'teste');
console.log(valorRetorno);
