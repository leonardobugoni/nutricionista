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

	var pesoValido = true;
	var alturaValida = true;


	if (peso <= 0 || peso >= 1000) {
	console.log("Peso Invalido");
	pesoValido = false;
	tdImc.textContent = "Peso Invalido";
	paciente.classList.add("paciente-invalido");
	}
	if (altura <= 0 || altura >= 3.00){
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

function calculaImc(peso,altura){
	var imc = 0;
	imc = peso / (altura * altura);

	return imc.toFixed(2);
}
