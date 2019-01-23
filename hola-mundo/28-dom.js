'use strict'

// DOM - Document Object Model.

// CONSEGUIR ELEMENTOS CON UN ID CONCRETO.

function cambiaColor(color){
	caja.style.background = color;
}

//Obtengo o seleccionamos del HTML el id micaja.
var caja = document.getElementById("micaja");

//Modifico el div agregando el string.
caja.innerHTML = "TEXTO EN LA CAJA DESDE JS!";
//El fondo lo pongo de color rojo.
caja.style.background = "red";

console.log(caja);


//CONSEGUIR ELEMENTOS POR SU ETIQUETA.
var todosLosDiv = document.getElementsByTagName('div');

var seccion = document.querySelector("#miseccion");
var valor;

	for (valor in todosLosDiv) {
		if(typeof todosLosDiv[valor].textContent == 'string'){
			var parrafo = document.createElement("p");
			var texto = document.createTextNode(todosLosDiv[valor].textContent);
			parrafo.append(texto);
			seccion.append(parrafo);
			
		}
	}


// CONSEGUIR ELEMENTOS POR SU CLASE CSS.
var divsRojos = document.getElementsByClassName('rojo');
for(var div in divsRojos){
	if(divsRojos[div].className == "rojo")
		divsRojos[div].style.background = "red";	
}

console.log(divsRojos);

// Query selector.

//Obtengo el id cuyo id sea encabezado.
var id = document.querySelector("#encabezado");
console.log(id);

//Obtengo los id cuya clase sea rojo.
var claseRojo = document.querySelectorAll(".rojo");
console.log(claseRojo);




