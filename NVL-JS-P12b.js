var veces = 0;
var pares = [];
var impares = [];
function aleatorio(){
	return Math.floor((Math.random()*100)+1);
}
function esPar(numeroPar){
	return (numeroPar%2==0);
}
while (veces<50){
	var numero = aleatorio();
	veces++;
	console.log(numero);
	if (esPar(numero)) {
		pares.push(numero);
	}
	else {
		impares.push(numero);
	}
}
alert("Estos son los números pares:"+pares);
alert("Estos son los números impares:"+impares); 