/*

Leia 2 valores A e B, que correspondem a 2 notas de um aluno. 
A seguir calcule e informe a média ponderada do aluno, sabendo que a nota A tem peso 4 e a nota B tem peso 6. 

*/

const prompt = require("prompt-sync")();
console.log();

// RECEBER AS NOTAS
// O + converte o valor recebido no prompt em NUMERO
let notaA = +prompt("Nota A: ");
let notaB = +prompt("Nota B: ");

// let mediaPond = ((notaA * 4) + (notaB * 6)) / 10;
let mediaPond = (notaA * 0.4) + (notaB * 0.6);

console.log(mediaPond);