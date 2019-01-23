'use strict'

window.addEventListener('load', function(){
	//Obtengo el id del formulario.
	var formulario = document.querySelector("#formulario");
	//Obtengo el cuadro.
	var box_dashed = document.querySelector(".dashed");

	//Oculto el cuadro.
	box_dashed.style.display = "none";

	formulario.addEventListener('submit', function(){
		console.log("Evento submit capturado");

		//Obtengo el nombre del formulario.
		var nombre = document.querySelector("#nombre").value;
		//Obtengo el nombre del formulario.
		var apellidos = document.querySelector("#apellidos").value;
		//Obtengo el nombre del formulario.
		var edad = parseInt(document.querySelector("#edad").value) ;

		//Valido el nombre.
		if(nombre.trim() == null || nombre.trim().length == 0){
			alert("El nombre no es válido");
			return false;
		}

		//Valido los apellidos.
		if(apellidos.trim() == null || apellidos.trim().length == 0){
			alert("Los apellidos no es válido");
			return false;
		}

		//Valido la edad.
		if(edad.trim() == null || edad.trim().length <= 0 || isNaN(edad)){
			alert("La edad no es válida");
			return false;
		}

		//Muestro el cuadro.
		box_dashed.style.display = "block";

		//Obtengo los datos del usuario con su propio ID del formulario.
		var p_nombre = document.querySelector("#p_nombre span");
		var p_apellidos = document.querySelector("#p_apellidos span");
		var p_edad = document.querySelector("#p_edad span");

		//La propiedad innerHTML establece o devuelve el contenido HTML (HTML interno) de un elemento.
		p_nombre.innerHTML = nombre;
		p_apellidos.innerHTML = apellidos;
		p_edad.innerHTML = edad;


		/*
		//Arreglo que contiene los datos del usuario.
		var datos_usuario = [nombre, apellidos, edad];
		var indice;

		for (indice in datos_usuario) {
			//Crea un nodo de elemento con el nombre especificado.
			var parrafo = document.createElement("p");
			//Agrego los datos del arreglo.
			parrafo.append(datos_usuario[indice]);

			//Agrego los datos de parrafo(datos ingresados por el usuario) asi los muestro en el cuadro.
			box_dashed.append(parrafo);
		}*/
	});
}); 