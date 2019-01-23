'use strict'

// Eventos del ratón.

//Con el evento load puedo poner los script del html en el body.
window.addEventListener('load', () =>{
	//Funcion que es invocada desde el HTML.
	function darAlerta(){
		alert('Has presionado el botón');
	}

	//Obtenemos el id.
	var boton = document.querySelector("#boton");

	//Evento CLICK.
	boton.addEventListener('click', function(){
		darAlerta();
	});

	//Mouse over(Cuando pasamos por arriba del boton cambia de color).
	boton.addEventListener('mouseover', function(){
		boton.style.background = "red";
	});

	//Mouse out(Cuando salimos del boton cambia de color).
	boton.addEventListener('mouseout', function(){
		boton.style.background = "white";
	});

	//FOCUS(Hace foco cuando entramos del input).
	var input = document.querySelector("#campo_nombre")
	input.addEventListener('focus', function(){
		console.log("[focus] Estas dentro del input");
	});

	//BLUR(Cuando salimos del input se ejecuta el evento Blur).
	input.addEventListener('blur', function(){
		console.log("[blur] Estas fuera del input");
	});

	//KEYDOWN(Cuando estas pulsando una tecla).
	input.addEventListener('keydown', function(event){
		console.log("Estás pulsando una tecla", String.fromCharCode(event.keyCode)); //Podemos saber que tecla está ejecutando.
	});

	//KEYPRESS(Devuelve la tecla presionada).
	input.addEventListener('keypress', function(event){
		console.log("Tecla presionada", String.fromCharCode(event.keyCode)); 
	});

	//KEYUP(Nos permite capturar el evento cuando se suelta la tecla).
	input.addEventListener('keypress', function(event){
		console.log("Tecla soltada", String.fromCharCode(event.keyCode)); 
	});
}); // End load.
