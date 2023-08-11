// IIFE - Immediatly Invoked Function Expression

(function(idade, peso, altura) {
    const sobrenome = 'Castor';
    function criaNome(nome) {
    return `${nome} ${sobrenome}`;
    }
    function falaNome() {
        console.log(criaNome('Fernanda'));
    }

    falaNome();
    console.log(`Idade: ${idade} - Peso: ${peso} - Altura: ${altura}`);
})(28, 50, 1.70);

