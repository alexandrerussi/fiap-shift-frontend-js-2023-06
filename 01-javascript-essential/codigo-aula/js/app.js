// console.log("Estou dentro do arquivo app.js");


// TEXTOS
// let nomePessoa = "Alexandre";
// console.log(nomePessoa);


// NUMEROS
// let Idade = 10;
// let x = 0;
// console.log(Idade);

// VALORES LÓGICOS -- BOOLEANS
// let autenticado = true;
// console.log(autenticado);


// VARIÁVEIS CONSTANTES
// const CPF = "456.456.789-10";
// console.log(CPF);
// console.log(typeof(CPF));


// COERÇÃO IMPLÍCITA
// let variavelQualquer = "Texto";
// console.log(variavelQualquer, typeof(variavelQualquer));

// variavelQualquer = 123;
// console.log(variavelQualquer, typeof(variavelQualquer));


// COERÇÃO EXPLÍCITA

// Number()
// let valor = "123";
// console.log(valor, typeof(valor));

// valor = Number(valor);
// console.log(valor, typeof(valor));


// Boolean()
// let valorLogico = "";
// console.log(valorLogico, typeof(valorLogico));

// valorLogico = Boolean(valorLogico);
// console.log(valorLogico, typeof(valorLogico));


// String()
// let ligado = false;
// console.log(ligado, typeof(ligado));

// ligado = String(ligado);
// console.log(ligado, typeof(ligado));


// Conversão de String para Number
// let valorProduto = "10"; // string
// console.log(valorProduto, typeof(valorProduto));

// valorProduto = parseInt(valorProduto);
// // valorProduto = +valorProduto;
// console.log(valorProduto, typeof(valorProduto));



// PROMPT -- VAMOS TENTAR COM O NODE!!

const prompt = require("prompt-sync")();

let nomeDigitado = prompt("Digite seu nome: ");
console.log(nomeDigitado, typeof(nomeDigitado));

// NPM -- NODE PACKAGE MANAGER --> prompt-sync