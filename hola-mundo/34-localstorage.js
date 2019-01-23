'use strict'

// Localstorage

//Verifico si el navegador es compatible con el Storage.
if(typeof(Storage) !== 'undefined'){
	console.log("Localstorage disponible");
}else{
	console.log("Localstorage no disponible");
}

//Guardar datos
localStorage.setItem("titulo", "Curso de JavaScript");

//Recuperar elemento
console.log(localStorage.getItem("titulo"));

//Meto el dato en el cuerpo de mi pagina
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//Guardar objetos
var usuario = {
	nombre: "Victor",
	apellido: "Stanziani",
	edad: 28
};

//Guardo un objeto JSON STRING en el localstorage
localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar objeto del localstorage parseado a JSON
var usrJS = JSON.parse(localStorage.getItem("usuario"));
console.log(usrJS);
document.querySelector("#datos").append(usrJS.edad, usrJS.nombre);

//Remover cosas del localstorage
localStorage.removeItem("usuario");

//Vacio el localstorage
localStorage.Clear();