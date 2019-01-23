'use strict';

// Fetch y peticiones a servicios / apis rest
var div_usuarios = document.querySelector("#usuarios");
var div_profesor = document.querySelector("#profesor");
var div_janet = document.querySelector("#janet");

	//Promesas encadenadas
	//Ejecutamos la promesa
	getUsuarios()
		//Capturamos los datos de la promesa
		.then(data => data.json())
		//Informamos los datos de la promesa
		.then(users => {
			listadoUsuarios(users.data);
			
			//Llamamos al otro metodo que es otra promesa
			return getInfo();
		})
		//Capturamos los datos y los informamos en nuestra pagina web
		.then(data => {
			div_profesor.innerHTML = data;
			
			//Llamamos al otro metodo que es otra promesa
			return getJanet();
		})
		//Capturamos los datos de la promesa
		.then(data => data.json())
		//Informamos los datos de la promesa
		.then(user => {
			mostrarJanet(user.data);
		})
		//Capturo el error
		.catch(error => {
			console.log("Hubo un error");
		});
		


//Retorna una promesa con los usuarios
function getUsuarios(){
	return fetch('https://reqres.in/api/users');
}

//Retorna una promesa con el usuario Janet
function getJanet(){
	 return fetch('https://reqres.in/api/users/2');
}

function getInfo(){
	//Genero un JSON
	var profesor = {
		nombre: 'Victor',
		apellidos: 'Stanziani',
		url: 'https://victorroblesweb.es'
	};

	//Instancio una Promesa
	return new Promise((resolve, reject) => {
		//Declaro la variables y a los 3 segundos va a ser asignada
		var profesor_string = "";
		setTimeout(function(){
			profesor_string = JSON.stringify(profesor);

			if(typeof profesor_string != 'string' || profesor_string == '') return reject('error');

			return resolve(profesor_string);

		}, 3000);
	});
}

//Funcion para informar el listado de usuarios
function listadoUsuarios(usuarios){
	usuarios.map((user, i) => {
		let nombre = document.createElement('h3');

		nombre.innerHTML = i + ". " + user.first_name + user.last_name;

		div_usuarios.appendChild(nombre);

		document.querySelector(".loading").style.display = "none";
	});
}


//Funcion para mostrar los datos del usuario
function mostrarJanet(user){
	let nombre = document.createElement('h4');
	let avatar = document.createElement('img');

	nombre.innerHTML = user.first_name + user.last_name;
	avatar.src = user.avatar;
	avatar.width = '100';

	div_janet.appendChild(nombre);
	div_janet.appendChild(avatar);	

	document.querySelector("#janet .loading").style.display = "none";
	
}