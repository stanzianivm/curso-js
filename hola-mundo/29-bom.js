'use strict'

// BOM - Browser Object Model

//Ver o acceder al objeto de la ventana.
function getBom(){
	console.log(screen.innerHeight);
	console.log(screen.innerWidth);
	//Obtengo la URL.
	console.log(window.location);
}

//Funcion redirecciona a una pagina.
function redirect(url){
	window.location.href = url;
}

//Funcion que abre una nueva ventana.
function abrirVentana(url){
	window.open(url);
}

getBom();