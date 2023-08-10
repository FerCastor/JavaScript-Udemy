// Declaração de função (Function hoisting) [com essa declaração, pode-se chamar a função tanto antes de criá-la quanto depois]

falaOi();

function falaOi(){
    console.log('Oi')
}

falaOi();

// First-class objects (objetos de primeira classe) -> Pode ser tratada como um dado
// Function expression
const souUmDado = function() {
    console.log('Sou um dado.');
}
// souUmDado(); // Pode ser chamada somente após a declaração


function executar(funcao) {
    console.log('Vou executar sua função...')
    funcao; 
}

executar(souUmDado()); 


// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function...')
}

funcaoArrow(); 


// Dentro de um objeto
const objeto = {
    falar() {
        console.log('Estou falando...')
    }
}

objeto.falar();