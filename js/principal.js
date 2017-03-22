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
	var imc = peso / (altura * altura);
	tdImc.textContent = imc.toFixed(2);
	}	

}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click" , function(){ //Cria um evento de click chamando uma function
	event.preventDefault(); //Evita o comportamento padrao de um evento
	
	var form = document.querySelector("#form-adiciona");
	
	var nome = form.nome.value;
	var peso = form.peso.value;
	var alutra = form.altura.value;
	var gordura = form.gordura.value;

	var pacienteTr = document.createElement("tr");

	var nomeTd = document.createElement("td"); //Cria uma variavel e Cria um elemento Td (tabela) no codigo
	var pesoTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");

	nomeTd.textContent = nome; //Seleciona o conteudo do texto e liga com a variavel
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura

	pacienteTr.appendChild(nomeTd);//Adiciona como filho de outra função
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	
	console.log(pacienteTr);

	var tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(pacienteTr);


});
