'use strict'

/*
9) Veja o código a seguir, descreva o que está acontecendo e, em sua ordem correta, quais informações serão impressas na tela?
*/

var var1;
function ctrlP(val, imp) {
  console.log('ctrl');
  var1 = "passou aqui"; // Altera o valor de var1
  return imp(val);
}

console.log(var1); //undefined
var1 = "impresso"; // Altera o valor de var1
var rt = ctrlP(var1, function(vlr) {
  console.log(vlr);
  return {
    impresso: vlr
  }
});
console.log(var1);
console.log(rt);
