const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit" , e=>{
	e.preventDefault()
	let warnings=""
	let entrar = false
	let regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
	

	if(nombre.value.length <6){
		warnings +="El nombre no es valido <br>"
		entrar = true
	}
	
	if (!regexEmail.test(email.Value)){
		warnings +="El email no es valido <br>"
		entrar = true
	}
	if (pass.value.length <8){
		warnings +="El password no es valido <br>"
		entrar = true
	}
	if (entrar){
		parrafo.innerHTML = warnings

	}
})