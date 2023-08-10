/*
Funções criadas com a palavra function tem uma variável especial que se chama ARGUMENTS, que sustenta todos os argumentos enviados.

Para enviar um valor em branco para a função (para que a variavel desejada assuma seu valor padrão), é preciso enviar no lugar do valor o termo UNDEFINED [NULL define como 0]

O parâmetro resto tem que ser o último da função.

ARGUMENTS NÃO EXISTEM EM ARROW FUNCTIONS
*/

const conta = function (...args) {
    console.log(args);
};
conta('+', 1, 20, 30, 40, 50); 


/*
const conta = function (operador, acumulador, ...numeros) {
    console.log(arguments);
};
conta('+', 1, 20, 30, 40, 50); 
*/

/* 
const conta = function (operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
};
conta('+', 1, 20, 30, 40, 50); 
*/

/*
function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
}
conta('+', 1, 20, 30, 40, 50);
*/

/*
function funcao([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
funcao(['Fer', 'Castor', 28]);
*/

/*
function funcao({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}

let obj = { nome: 'Fer', sobrenome: 'Castor', idade: 28};
funcao(obj);
*/

/*
function funcao(a = 0, b = 0) {
    console.log(a + b);
}

funcao(2, 3)
*/

/* function funcao () {
    console.log(arguments[5])
}

funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'Valor'); */

/*
function funcao () {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento
    }
    console.log(total)
}

funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)
*/