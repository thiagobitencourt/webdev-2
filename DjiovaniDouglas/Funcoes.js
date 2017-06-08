'use strict'

var variavel1;

function funcaoComScope(){
//  var variavel1;

  variavel1 = {
    attr: "Olá"
  }
  function funcaoInterna() {
    //var variavel1;
    console.log("FUNÇÃO INTERNA >>>", variavel1);
    var var2 = "definida dentro da função interna";
    console.log(var2);

    function funcaoMaisInternaAinda(){
      var var3 = "valor mais interna ainda";
      console.log(var3);
    }
    funcaoMaisInternaAinda();
    console.log(var3);
    console.log(var2);
    console.log(variavel1);
  }
  funcaoInterna();
  console.log(var2);
  console.log("funcaoComScope >>>", variavel1);
}
//funcaoComScope();
//console.log("fora de qualquer funcao",variavel1);

var str = "Fernando";
console.log(str.length);
var arr = ["1","xpto", {},[],"sads"];
console.log(arr.length);
arr.forEach( function(item){
  console.log(item);
});

console.log(str.toUpperCase());

var b = 3.12345678903213;
console.log(b.toFixed(2));
