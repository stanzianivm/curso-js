'use strict'

/*
	Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
	PLUS: Si 
*/

//El prompt siempre recoge string.
var numero1 = parseInt(prompt('Introduce el primer numero', 0));
var numero2 = parseInt(prompt('Introduce el segundo numero', 0));

if(numero1 == numero2){
	alert("LOS NUMEROS SON IGUALES");
}
else
	if(numero1 > numero2){
		alert("EL NUMERO MAYOR ES EL: " + numero1);
		alert("EL NUMERO MENOR ES EL: " + numero2);
	}