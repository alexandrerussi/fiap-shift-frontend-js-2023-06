/*

Montar um script onde o usuário entre com o valor em Reais e faça a sua respectiva conversão para:
Dólar Americano – Euro - Peso Argentino - Libra Esterlina - Iene
Exibir na tela todos os valores obtidos com apenas 02 casas decimais.
Valor em dólar:
Valor em euro:
...


*/

console.log();
const prompt = require("prompt-sync")();

let valorReais = +prompt("Reais: ");

let valorDolar = valorReais * 0.21;
let valorEuro = valorReais * 0.19;



// console.log(`R$ ${valorReais} = $ ${valorDolar}`);
// console.log(`R$ ${valorReais} = € ${valorEuro}`);

console.log(`Valor em Dólar: $${valorDolar}`);

console.log(`Valor em Euro: €${valorEuro}`);

// console.log(`Valor em Peso Argentino: $${valuePesoArgentino}`);

// console.log(`Valor em Libra: £${valueLibra}`);

// console.log(`Valor em Iene: ¥${valueIene}`);


console.log();