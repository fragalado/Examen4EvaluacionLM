/**
 * Clase Usuario
 */
class Usuario{
	// Constructores
	constructor(nombre, apellidos, pRecuperacion, rRecuperacion, email, password){
		this._nombre = nombre;
		this._apellidos = apellidos;
		this._pRecuperacion = pRecuperacion;
		this._rRecuperacion = rRecuperacion;
		this._email = email;
		this._password = password;
	}
	
	// Getter y Setter
	get nombre(){
		return this._nombre;
	}
	set nombre(nombre){
		this._nombre = nombre;
	}
	get apellidos(){
		return this._apellidos;
	}
	set apellidos(apellidos){
		this._apellidos = apellidos;
	}
	get pRecuperacion(){
		return this._pRecuperacion;
	}
	set pRecuperacion(pRecuperacion){
		this._pRecuperacion = pRecuperacion;
	}
	get rRecuperacion(){
		return this._rRecuperacion;
	}
	set rRecuperacion(rRecuperacion){
		this._rRecuperacion = rRecuperacion;
	}
	get email(){
		return this._email;
	}
	set email(email){
		this._email = email;
	}
	get password(){
		return this._password;
	}
	set password(password){
		this._password = password;
	}	
}


// Lista donde guardaremos objetos Usuario
let lista = [];

// Variables donde guardaremos el usuario que se ha logueado (esto es para la recuperacion de contraseña)
let nombreUsu, apellUsu, pRecuperacionUsu, rRecuperacionUsu, emailUsu;


/**
 * Funcion que crea un objeto Usuario y lo añade a la lista
 * Despues actualiza el localStorage pasadonle la lista
 */
function creaUsuario(form){
	// Obtenemos los datos del formulario
	let nombre = form.nombreUsu.value;
	let apellidos = form.apellidosUsu.value;
	let pRecuperacion = form.pRecuperacionUsu.value;
	let rRecuperacion = form.rRecuperacionUsu.value;
	let email = form.emailUsu.value;
	let password = form.contraseñaUsu.value;
	
	// Añadimos un nuevo objeto Usuario con los datos del formulario a la lista
	lista.push(new Usuario(nombre, apellidos, pRecuperacion, rRecuperacion, email, password));
	
	// Añadimos al localStorage la lista actualizada
	localStorage.setItem("listaUsus", JSON.stringify(lista));
}


/**
 * Funcion que comprueba que el email y la contraseña introducidos en el formulario existen
 */
function compruebaUsuario(form){
	// Obtenemos la lista con todos los usuarios creados
	lista = JSON.parse(localStorage.getItem("listaUsus"));
	
	// Ahora obtenemos el email y la contraseña introducidos en el formulario y comprobamos si coinciden con algun usuario
	let email = form.emailUsu.value;
	let password = form.contraseñaUsu.value;
	
	let existe = false;
	for(let i = 0; i < lista.length; i++){
		if(email == lista[i]._email && password == lista[i]._password){
			nombreUsu = lista[i]._nombre;
			apellUsu = lista[i]._apellidos;
			pRecuperacionUsu = lista[i]._pRecuperacion;
			rRecuperacionUsu = lista[i]._rRecuperacion;
			emailUsu = lista[i]._email;
			existe = true;
		}
			
	}
	
	// Si los datos son correctos lo mandaremos a la pagina de bienvenido
	// Si no son correctos mostraremos una alerta
	if(existe){
		window.location = "./vistaBienvenido.html";
	}
	else{
		alert("¡El email y/o la contraseña son incorrectos!");
	}
		
}
