$(document).ready(function(){	
	reloadLinks();
	$('#add_button').click(function(){
		//Obtenemos el valor de link  
		//Con el metodo append añadimos
		$('#menu').prepend('<li><a href="'+$("#add_link").val()+'"</a></li>');
		reloadLinks();
	});		
});
	
function reloadLinks(){
	//Con la funcion each busca las etiquetas 'a'
	$('a').each(function(index){
		var that = $(this);
		//Obtengo los enlaces
		var enlace = $(this).attr("href");
		//Los enlaces los transformo en texto
		that.text(enlace);
	});
}