var titulo = document.querySelector(".titulo");
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;
  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;
  var tdImc = paciente.querySelector(".info-imc");
  pesoValido = validaPeso(peso);
  alturaValida = validaAltura(altura);

  if (!pesoValido) {
    console.log("Peso inválido");
    pesoValido = false;
    tdImc.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido");
  }
  if (!alturaValida) {
    console.log("Altura inválida");
    alturaValida = false;
    tdImc.textContent = "Altura inválida!";
    paciente.classList.add("paciente-invalido");
  }

  if (pesoValido && alturaValida) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  } else {
    tdImc.textContent = "Altura e/ou peso inválidos!";
  }
}

function validaPeso(peso){
  if(peso >=0 && peso <500){
    return true;
  }else{
    return false;
  }
}

function validaAltura(altura){
  if(altura>=0 && altura <3.0){
    return true;
  }else{
    return false;
  }
}


function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}


