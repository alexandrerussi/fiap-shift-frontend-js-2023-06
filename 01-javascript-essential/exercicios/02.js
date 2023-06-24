/*
    Leia 2 valores A e B, que correspondem a 2 notas de um aluno. A seguir calcule e informe a média do aluno.
*/

const prompt = require("prompt-sync")();
console.log();

// RECEBER AS NOTAS
// O + converte o valor recebido no prompt em NUMERO
let notaA = +prompt("Nota A: ");
let notaB = +prompt("Nota B: ");

let media = (notaA + notaB) / 2;

console.log(media);

console.log();