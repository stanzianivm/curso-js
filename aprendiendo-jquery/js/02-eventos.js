$(document).ready(function(){

	// MouseOver y MouseOut
	//Obtengo el id CAJA.
	var caja = $("#caja");

/*	//MouseOver cuando pasamos por arriba de la caja cambia el color 
	caja.mouseover(function(){
		//this hace referencia a la variable donde se aplica el evento
		$(this).css('background', 'red');

	});


	//MouseOut cuando salimos de arriba de la caja cambia el color 
	caja.mouseout(function(){
		$(this).css('background', 'green');
	});
*/

	// Hover
	// Realiza lo mismo que el codigo de arriba pero mas efectivo
	function cambiaRojo(){
		//this hace referencia a la variable donde se aplica el evento
		$(this).css('background', 'red');

	};

	function cambiaVerde(){
		$(this).css('background', 'green');
	};

	caja.hover(cambiaRojo, cambiaVerde);

	// Click
	caja.click(function(){
		$(this).css("background", "blue")
				.css("color", "white");
	});

	//Doble click
	caja.dblclick(function(){
		$(this).css("background", "pink")
				.css("color", "yellow");
	});

	// Focus y Blur
	var nombre = $("#nombre");
	var datos = $("#datos");

	//Focus es cuando hago click sobre el input cambia de color
	nombre.focus(function(){
		$(this).css("border", "2px solid green");
	});

	//Blur es cuando hago click afuera el input cambia de color
	nombre.blur(function(){
		$(this).css("border", "2px solid #ccc");
		datos.text($(this).val()).show();
	});

	// Mousedown y mouseup
	datos.mousedown(function(){
		$(this).css("border-color", "gray");
	});

	datos.mouseup(function(){
		$(this).css("border-color", "black");
	});

	// Mousemove
	//Obtengo las coordenadas del mouse en la pagina
	$(document).mousemove(function(){
		console.log(event.clientX);
		console.log(event.clientY);
	})

});