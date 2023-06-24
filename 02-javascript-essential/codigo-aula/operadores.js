// OPERADORES RELACIONAIS

// >> Respostas possíveis: VERD. OU FALSO || true ou false

// >    MAIOR QUE
// <    MENOR QUE
// >=   MAIOR OU IGUAL QUE
// <=   MENOR OU IGUAL QUE

// !=   DIFERENTE QUE
// ==   IGUAL QUE

// ===  ESTRITAMENTE IGUAL QUE
// !==  ESTRITAMENTE DIFERENTE QUE

console.log();

// let verificacao = 4 === "4";
// console.log(verificacao);

// let idade = 17;
// console.log(idade < 18);

// let nome = "Alexandre";
// console.log(nome != "");

// let num1 = 5;
// let num2 = 3;

// console.log(num1 != num2);


// --------------------------------------------


// OPERADORES LÓGICOS

// E    &&
// OU   ||
// NOT  !


// LÓGICA E

// E-MAIL       SENHA       ENTRAR NO SISTEMA
// TRUE         TRUE        TRUE
// TRUE         FALSE       FALSE
// FALSE        TRUE        FALSE
// FALSE        FALSE       FALSE


let email = "a@b.com";
let senha = "123";

// OPERAÇÃO RELACIONAL (abaixo)

// console.log(email == "a@b.com");
// console.log(senha == "123");

// let verificaEmail = email == "a@b.com";
// let verificaSenha = senha == "123";

// // OPERAÇÃO LÓGICA!!! (abaixo)
// console.log(verificaEmail && verificaSenha);





// LÓGICA OU

// SOLZAO       JOGO BR     CHURRAS NO DOM.
// TRUE         TRUE        TRUE
// TRUE         FALSE       TRUE
// FALSE        TRUE        TRUE
// FALSE        FALSE       FALSE

// let sol = false;
// let jogo = false;
// let temperatura = 25;

// console.log(sol || jogo || (temperatura > 22));


// VERIFICAÇÃO DE IDADE DO VOTO OPCIONAL

// let idade = 17;

// let verificaMenorIdade = idade >= 16 && idade < 18;
// console.log("Voto opc. menor idade: " + verificaMenorIdade);

// let verificaMelhorIdade = idade > 70;
// console.log("Voto opc. melhor idade: " + verificaMelhorIdade);

// // APLICAÇÃO DO OU
// console.log(verificaMenorIdade || verificaMelhorIdade);




// OPERADORES DE INCREMENTO OU DECREMENTO

let num = 5;

num = num + 1;  // num = 6
num++;          // num = 7

console.log(num);

console.log(num++); // POS-FIXADO

console.log(num); // num = 8

num--;          // num = 7
num--;          // num = 6

console.log(num);


// OPERADORES DE ATRIBUIÇÃO
// num = num + 1;
num += 20;
num /= 2;
num *= 5;

console.log(num);



console.log();

