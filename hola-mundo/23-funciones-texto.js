'use strict'

// Transformación de textos.
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript de Victor Robles";
var texto2 = "es muy buen curso";

//Guardamos en dato al numero que lo transformamos en string.
var dato = numero.toString();
//Convierte el string en mayúscula.
var mayus = texto1.toUpperCase();
//Convierte el string a minúscula.
var minus = texto2.toLowerCase();

console.log(dato);
console.log(mayus);
console.log(minus);

// Calcular longitud del texto.
var nombre = "hola";
console.log(nombre.length);

//Concatenar.
var textoTotal = texto1.concat(" " + texto2);
console.log(textoTotal);

