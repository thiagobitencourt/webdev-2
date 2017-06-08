'use strict';

//console.log("Estou no arquivo funcoes.js");
var variavel1;

function funcaoComScope(){
  var variavel1;

  variavel1 = {
    attr: "Olá"
  }

  function funcaoInterna(){
    console.log("FUNCAO INTERNA >>>>", variavel1);
    var var2 = "definida dentro da funcao interna";
    console.log(var2);

    function funcaoMaisInternaAinda(){
      var var3 = "valor mais interno ainda";
      console.log(var3);
      console.log(var2);
      console.log(variavel1);

    }
    funcaoMaisInternaAinda();
  }
  funcaoInterna();
  console.log("FUNCAO COM ESCOPO", variavel1);
}

funcaoComScope();
console.log("fora de qual quer funcao", variavel1);


var str = "Fernando";

console.log(str.length);

var arr = ["1", "xpto", {}, [], "asdasd"];
console.log(arr.length);

arr.forEach( function(item){
  console.log(item);
} );

console.log(str.toUpperCase());

var b = 3.317131313131133131;
console.log(b.toFixed(2));
