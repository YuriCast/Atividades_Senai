// 1° resposta

let num = parseFloat(prompt("Digite um numero"));
if (num >= 0 && num < 100) {
  if (num <= 25) {
    console.log("Intervalo [0,25]");
  } else if (num <= 50) {
    console.log("Intervalo (25, 50]");
  } else if (num <= 75) {
    console.log("Intervalo (50, 75]");
  } else {
    console.log("Intervalo (75, 100]");
  }
} else {
  console.log("Fora do intervalo");
}

// 2° resposta

let num1 = Number(prompt("Insira um número: "));
let num2 = Number(prompt("Insira outro número: "));

if (num1 > num2) {
  if (num1 % num2 == 0) {
    console.log("Sao multiplos!");
  } else {
    console.log("Nao sao multiplos!");
  }
} else {
  if (num2 % num1 == 0) {
    console.log("Sao multiplos!");
  } else {
    console.log("Nao sao multiplos!");
  }
}

// 3° resposta

// 4° resposta

var horaInicio = parseFloat(prompt("Insira a hora de início do jogo"));
var horaFim = parseFloat(prompt("Insira a hora de fim do jogo"));

if (horaInicio >= horaFim) {
  var duracao = 24 - horaInicio + horaFim;
} else {
  var duracao = horaFim - horaInicio;
}

console.log("O jogo durou " + duracao + " horas");

// 5° resposta
