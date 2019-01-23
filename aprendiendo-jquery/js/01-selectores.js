$(document).ready(function(){

	// Selector de ID
	//# => Se refiere al ID
	$("#rojo").css("background", "red");

	$("#amarillo").css("background", "yellow");

	$("#verde").css("background", "green");

	// Selector de clases
	// . => Se refiere a una clase
	var miClase = $('.zebra').css("padding", "5px");

	$('.sin_borde').click(function(){
		console.log("Click dado!!");
		$(this).addClass('zebra');
	});

	// Selector de etiquetas

	var parrafos = $('p').css("cursor", "pointer");

	parrafos.click(function(){
		var that = $(this);
		//Busca si tiene la clase Zebra
		if(!that.hasClass('grande')){
			that.addClass('grande');	
		}else{
			that.removeClass('grande');	
		}
	});

	// Selector de atributo

	$('[title="Google"]').css('background', '#ccc');
	$('[title="YouTube"]').css('background', '#blue');

	// Otros

	//$('p, a').addClass('margen-superior');

	var busqueda = $("#caja .resaltado").eq(0).parent().parent().parent().find('[title="Google"]');
	console.log(busqueda);
});
		