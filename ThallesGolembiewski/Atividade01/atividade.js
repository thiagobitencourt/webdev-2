'use strict'


//Questões

/*
6 - Usando a sintaxe da linguagem JavaScript, crie um objeto com um atributo que tenha um valor do tipo string, um atributo do tipo number e um atributo com valor do tipo array. Atribua este objeto a uma constante.
*/
    const object = {
        keyString: 'string',
        keyNumber: 12,
        keyArray: [],
        keyFunction: function(){}
     };

/*
7 - Usando a sintaxe da linguagem JavaScript, defina uma função que recebe como parâmetro dois valores e que retorna um objeto que armazena os valores recebidos nos atributos a e b. Execute esta função e imprima o resultado no console.
*/

function parameter(valueA, valueB){ return { A: valueA, B: valueB }; }

console.log(parameter(7, "sete"));