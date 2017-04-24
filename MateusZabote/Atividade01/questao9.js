'use strict';

/*
Questão 9
Veja o código a seguir, descreva o que está acontecendo e, em sua ordem correta, quais informações serão impressas na tela?
*/
var var1;
function ctrlP(val, imp) {
  console.log('ctrl');
  var1 = "passou aqui"; // Altera o valor de var1
  return imp(val);
}

console.log(var1);
var1 = "impresso"; // Altera o valor de var1
var rt = ctrlP(var1, function(vlr) {
  console.log(vlr);
  return {
    impresso: vlr
  }
});
console.log(var1);
console.log(rt);

/*
declara var1 com valor indefinindo
cria uma função ctrlP com parametro val,imp
imprime a ctrl como undefined
var1 recebe "passou aqui"
executa a função com parametro val
imprime valor de var1
var1 recebe "impresso"
cria variavel rt que recebe função ctrlP
imprime vlr
retorna objeto com valor de vlr
imprime var1i
imprime rt

Resultado:
undefined
ctrl
impresso
passou aqui
{ impresso: 'impresso' }

*/
