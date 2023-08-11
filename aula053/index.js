// Closures -> relacionado ao escopo léxico da função (o closure nada mais é do que a habilidade de a função acessar o seu escopo léxico [ou seja, ela lembra dela mesma e dos vizinhos declarados ao redor dela])

function retornaFuncao(nome) {
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao('João'); 
const funcao2 = retornaFuncao('Miguel'); 
console.log(funcao());
console.dir(funcao2());
