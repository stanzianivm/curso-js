'use strict'

window.addEventListener('load', function(){

	// Timers
	// setInterval: Llama a una funcion o evalua una expresion a intervalos especificos (milisegundos)
	// setTimeout:  Ejecuta una funcion solo una vez, despues de un numero especifico de milisegundos
	
	function intervalo(){
		var tiempo = setInterval(function(){
		console.log("Set interval ejecutado");
	
		var encabezado = document.querySelector("h1");
		if(encabezado.style.fontSize == "50px"){
			encabezado.style.fontSize = "20px";
		}else{
			encabezado.style.fontSize = "50px";
		}

		}, 1000);

		return tiempo;
	};
	
	var tiempo = intervalo();

	var stop = document.querySelector("#stop");

	stop.addEventListener("click", function(){
		alert("has parado el tiempo en bucle");
		clearInterval(tiempo);
	});

	var start = document.querySelector("#start");
	start.addEventListener("click", function(){
		alert("has iniciado el tiempo en bucle");
		intervalo();
	});
});