// 1° resposta

let nota1 = parseFloat(prompt("digite nota 1"));
let nota2 = parseFloat(prompt("Digite a nota 2"));
media = (nota1 + nota2) / 2;
console.log(media);
if (media >= 6.0) {
  console.log("aprovado");
} else {
  console.log("exame");
  let exame = parseFloat(prompt("Digite a nota no exame"));
  let final = (media + exame) / 2;
  console.log(final);

  if (final >= 6.0) {
    console.log("Aprovado");
  } else {
    console.log("Reprovado");
  }
}

//2ª Resposta

let num = parseInt(prompt("Digite um numero"));

if (num == 0) console.log("Número igual a zero");
else if (num > 0) console.log("Número positivo");
else console.log("Número Negativo");

// 3° Resposta

let num1 = parseInt(prompt("Digite um número"));
let num2 = parseInt(prompt("Digite outro número"));

if (num1 > num2) console.log(num1);
else console.log(num2);

// 4° Resposta

let sexo = String(prompt("Qual seu gênero? Ex: M ou F"));
if (sexo == "F") console.log("Você é uma mulher");
else if (sexo == "M") console.log("Você é um homem");
else console.log("Sexo inválido");

// 5° Resposta

let idade = parseInt(prompt("Qual a sua idade?"));
if (idade <= 10) console.log("Infantil");
else if (idade >= 11 && idade <= 13) console.log("Infanto Juvenil");
else if (idade >= 14 && idade <= 18) console.log("Juvenil");
else console.log("Adulto");
