// variáveis declaradas com let não podem ser redeclaradas
// Let tem escopo de bloco { ... bloco}
// Var só tem escopo de função

// Var permite a utilização dentro ou fora de um bloco dentro de uma função, o let não.
// Se utilizarmos uma variável declarada com var antes da declaração, o valor retornado será UNDEFINED. Se fizermos o mesmo com uma variavel declarada com let, será retornado um erro. [chama-se hosting]



const verdadeira = true;

let nome = 'A'; // criando
var nome2 = 'A'; 

if (verdadeira) {
    let nome = 'B'; // criando
    var nome2 = 'E'; // Redeclarando

    if (verdadeira) {
        var nome2 = 'C'; // Redeclarando
        let nome = 'D';
    }
}

console.log(nome, nome2)
