'use strict'

function funA(){
	var x = 10;
return function(xpto){
	console.log(xpto+10);

}
}

var soma10=funA();
soma10(5);
