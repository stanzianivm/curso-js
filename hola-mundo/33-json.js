'use strict'
 
 // JSON - Java Script Object Notation

// Objeto JSON
 var pelicula = {
 	 titulo: 'El secreto de sus ojos',
 	 year: 2017,
 	 pais: 'Argentina'
 };

// Arreglo JSON
 var peliculas = [
 	{titulo: "Titanic", year: 2014, pais: "Francia"},
 	pelicula
 ];

var caja_peliculas = document.querySelector("#peliculas");
var index;
for(index in peliculas){
	var p = document.createElement("p");
	p.append(peliculas[index].titulo + " - " + peliculas[index].year);
	caja_peliculas.append(p);
}