var titulo = document.querySelector(".titulo"); //CRIA VARIAVEL E LINKA COM O "TITULO"
titulo.textContent = "Aparecida	Nutricionista"; //MUDA O CONTEUDO DO TEXTO

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i< pacientes.length; i++){

	var paciente = pacientes[i]

	var tdPeso = paciente.querySelector(".info-peso");
	var peso  = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoValido = validaPeso(peso);
	var alturaValida = validaAltura(altura);

	if (!validaPeso) {
		console.log("Peso Invalido");
		pesoValido = false;
		tdImc.textContent = "Peso Invalido";
		paciente.classList.add("paciente-invalido");
	}

	if (!validaAltura){
		console.log("Altura Invalida");
		alturaValida = false; 
		tdImc.textContent = "altura Invalida";
		paciente.classList.add("paciente-invalido");
	}
	if (alturaValida && pesoValido){
		var imc = calculaImc(peso, altura);
		tdImc.textContent = imc;
	}

}

function validaAltura (altura){
	if(altura >= 0 && altura <= 3.0){
		return true;
	}else{
		return false;
	}
}

function calculaImc(peso,altura){
	var imc = 0;
	imc = peso / (altura * altura);

	return imc.toFixed(2);
}


function validaPeso(peso){
	if (peso >=0 && peso < 1000){
		return true;
	}else{
		return false;
	}
}