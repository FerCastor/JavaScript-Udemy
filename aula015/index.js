let num1 = 9.54578;
let num2 = Math.floor(num1); // Arredonda o valor para baixo
let num3 = Math.ceil(num1); // Arredonda o valor para cima
let num4 = Math.round(num1); // Arredonda para o valor redondo mais próximo
let num5 = 9;

console.log(num2);
console.log(num3);
console.log(num4);
console.log(Math.max(1, 2, 3, 9, 5, 70)); // Retorna o maior número da sequência
console.log(Math.min(1, 2, 3, 9, 5, 70)); // Retorna o menor número da sequência

// const aleatorio = Math.random() // Gera um número aleatório
// const aleatorio = Math.random() * (10 - 5) + 5 // Gera um número aleatório entre 10 e 5 (valores decimais)
const aleatorio = Math.round(Math.random() * (10 - 5) + 5) // Gera um número aleatório entre 10 e 5 (inteiro)
console.log(aleatorio); 

console.log(Math.pow(2, 10)); // Potenciação (mesma coisa que 2 ** 10)
console.log(2 ** 10); // Potenciação (mesma coisa que 2 ** 10)

console.log(num5 ** (1/2)); // Retorna o valor da raíz quadrada (sem usar lib)
console.log(num5 ** 0.5); // Retorna o valor da raíz quadrada (sem usar lib)
console.log(Math.sqrt(num5)); // Retorna o valor da raíz quadrada (usando lib)
