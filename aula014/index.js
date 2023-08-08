// Converter Number para String
// IEEE 754-2008 [Padrão que o JS utiliza para a precisão numérica quando se trata de valores com casas decimais]
let num1 = 0.7; // number
let num2 = 0.1; // number

// num1 = num1.toString();
// num2 = num2.toString();
num1 += num2 // 0.8
num1 += num2 // 0.9
num1 += num2 // 1.0

// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0

num1 = Number(num1.toFixed(2)); // Modo correto de resolver a imprecisão

console.log(num1);
console.log(Number.isInteger(num1));

// console.log(num1 + num2); // Concatena os dois valores, pois eles são strings e não números, então a soma não é realizada

// console.log(num1.toString(2));  // Exibe o valor no formato binário
// console.log(num1.toFixed(2)); // Arredonda o valor e coloca a quantidade de casas decimais (passado no parênteses)
// console.log(Number.isInteger(num1)); // Verifica se a variável é um número inteiro
// console.log(Number.isNaN(num1)); // Verifica se a variável é um NaN (not a number)

// let temp = num1 * 'Olá';
// console.log(temp);
// console.log(Number.isNaN(temp)); // Verifica se a variável é um NaN (not a number) [Retorna true sempre que a conta for inválida]
