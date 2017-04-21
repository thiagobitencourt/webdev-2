'use strict';

/*
6) Usando a sintaxe da linguagem JavaScript, crie um objeto com um atributo que tenha um valor do tipo string,
um atributo do tipo number e um atributo com valor do tipo array.Atribua este objeto a uma constante.
*/

const objeto = {
  atributoString: 'String',
  atributoInt: 5,
  atributoArray: []
};

/*
 7) Usando a sintaxe da linguagem JavaScript, defina uma função que recebe como parâmetro dois valores e
 que retorna um objeto que armazena os valores recebidos nos atributos a e b. Execute esta função e imprima o resultado no console.
 */

 function funcao(valor1, valor2){

    var objeto = {
      atributoA: valor1,
      atributoB: valor2
    }

    return objeto;
 }

 var valorRetorno = funcao(5, "seis");
 console.log(valorRetorno);
