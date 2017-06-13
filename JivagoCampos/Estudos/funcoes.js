/*
  Estiveram presente no dia 06/04/2017 os alunos:
  Carlos
  Lucas/2
  Christopher
  Eleani
  Fernando
  Matheus
  Mateus
  Jivago
  Alexsandro
  Djiovani
  Thalles
  Leandro
  Willian
*/
// console.log("Estou no arquivo funcoes.js");

'use strict';
var variavel1;

function funcaoComScope() {
  // var variavel1;

  variavel1 = {
    attr: "Olá"
  }

  function funcaoInterna() {
    // var variavel1;
    console.log("FUNCAO INTERNA >>> ", variavel1);
    var var2 = "definida dentro da funcao interna";
    console.log(var2);

    function funcaoMaisInternaAinda() {
      var var3 = "valor mais interno ainda";
      console.log(var3);
      console.log(var2);
      console.log(variavel1);
    }
    funcaoMaisInternaAinda();
    // console.log(var3); // var3 esta fora de escopo
  }
  funcaoInterna();
  // console.log(var2); // var2 esta fora de escopo

  console.log("funcaoComScope", variavel1);
}
// funcaoComScope();
// console.log("fora de qualquer funcao", variavel1);

var str = "fernando";
// console.log(str.length);
var arr = ["1", "xpto", {}, [], "asdasd"];
// console.log(arr.length)
arr.forEach( function(item) {
    console.log(item);
} );

console.log(str.toUpperCase());

var b = 3.146546512135646516513245;
console.log(b.toFixed(2));
