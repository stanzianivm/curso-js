'use strict'

//Parametros REST y SPREAD
//REST: Cuando llegan parametros indefinidos.
//SPREAD: Permite que una expresión sea expandida en situaciones donde se esperan múltiples argumentos (llamadas a funciones) o múltiples elementos (arrays literales).

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
	console.log()
}

listadoFrutas("naranjas", "manzanas", "bananas", "peras", "melon");

var frutas = ["naranja", "manzana"];
listadoFrutas(...fruta, "bananas", "peras", "melon");