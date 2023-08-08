let umaString = "O rato roeu a roupa do rei de ROMA.";

console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/[a-z]/g));
console.log(umaString.search(/x/));
console.log(umaString.replace('O', 'Outro'));
console.log(umaString.replace(/O/, 'Outro'));
console.log(umaString.replace(/r/g, '#')); // Substitui todas as letras da string
console.log(umaString.replace(/r/, '#')); // Substitui somente a primeira letra da string
console.log(umaString.length);
console.log(umaString.slice(-3)); // Começa do final da string e contra 3 casas
console.log(umaString.slice(-5, umaString.length - 1)); 
console.log(umaString.slice(-5, - 1)); 
console.log(umaString.substring(umaString.length - 5, umaString.length - 1)); 
console.log(umaString.split(' ', 3)); 
console.log(umaString); 
console.log(umaString.toUpperCase()); 
console.log(umaString.toLowerCase()); 
