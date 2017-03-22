var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click" , function(event){ //Cria um evento de click chamando uma function
	event.preventDefault(); //Evita o comportamento padrao de um evento
	
	var form = document.querySelector("#form-adiciona");

	var paciente = obtemPacienteDoFormulario(form);

	var pacienteTr = montaTr(paciente);

	var erro = validaPaciente(paciente);


	if (erro.lenght > 0){
		var mensagemErro = document.querySelector("#mensagem-erro");
		mensagemErro.textContent = erro;
		return;
	}

	var tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(pacienteTr);

	form.reset();

});

	function montaTr(paciente) {

	//Cria TR
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //Cria as TD's e a adiciona dentro da TR
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
	
	// retorna a TR
    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}


function validaPaciente (paciente){
	if (validaPeso(paciente.peso)){
		return "";
	}else{
		return "Peso é invalido";
	}
}

