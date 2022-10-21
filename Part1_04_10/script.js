// 1° resposta

let nota1 = parseFloat(prompt("Digite nota 1"));
let nota2 = parseFloat(prompt("Digite nota 2"));

media = (nota1 + nota2) / 2;
console.log(media);

if (media >= 6.0) {
  console.log("Aluno aprovado");
} else {
  console.log("exame");
  let exame = parseFloat(prompt("Difite a nota do exame"));
  let final = (media + exame) / 2;
  console.log(final);

  if (final >= 6.0) {
    console.log("Aprovado");
  } else {
    console.log("Reprovado");
  }
}

// 2° resposta

let num = parseFloat(prompt("Digite um número"));

if (num == 0) console.log("Número igual a zero");
else if (num > 0) console.log("Número positivo");
else console.log("Número Negativo");

// 3° resposta

let num1 = parseFloat(prompt("Digite o primeiro número"));
let num2 = parseFloat(prompt("Digite outro número"));
console.log(num1);
console.log(num2);

if (num1 > num2) console.log("O número maior é: " + num1);
else if (num1 < num2) console.log("O número maior é: " + num2);

// 4° reposta

let sexo = String(
  prompt(
    'Digite a inicial do seu sexo, caso não se indetifique com nenhum dos dois digite "Outro"'
  )
);
if (sexo == "F") console.log("Você é uma mulher");
else if (sexo == "M") console.log("Você é um homem");
else console.log("Sexo inválido");

// 5° resposta

let numm = parseFloat(prompt("Digite a sua idade"));
if (numm <= 10) {
  console.log("Infantil");
} else if (numm <= 13) {
  console.log("Infanto Juvenil");
} else if (numm <= 18) {
  console.log("Juvenil");
} else if (numm >= 18) {
  console.log("Adulto");
}
