var titulo = document.querySelector(".titulo"); //CRIA VARIAVEL E LINKA COM O "TITULO"
titulo.textContent = "Aparecida	Nutricionista"; //MUDA O CONTEUDO DO TEXTO

var paciente = document.querySelector("#primeiro-paciente");

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
}
if (altura <= 0 || altura >= 3.00){
	console.log("Altura Invalida");
	alturaValida = false; 
	tdImc.textContent = "altura Invalida";
}
if (alturaValida && pesoValido){
	var imc = peso / (altura * altura);
	tdImc.textContent = imc;
}