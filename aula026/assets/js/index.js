/* Resposta professor */

// Capturar o evento de submit do formulário
const form = document.querySelector('.form')

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Captura os dados dos inputs
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    // Define os valores como number (somente se for numérico)
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // Se o peso não for verdadeiro (se for diferente de number, retorna false e impede a continuação do código)
    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    // Se a altura não for verdadeira (se for diferente de number, retorna false e impede a continuação do código)
    if (!altura) {
        setResultado('Altura inválido', false);
        return;
    }

    const imc = getImc(peso, altura)
    const nivelImc = getNivelImc(imc)

    const msg = `Seu IMC é ${imc} (${nivelImc})`;
    setResultado(msg, true);

});

// Verifica o nível do imc baseando-se no resultado do cálculo
function getNivelImc(imc) {
    const nivel = [
        /* index 0 */ 'Abaixo do peso', 
        /* index 1 */ 'Peso normal', 
        /* index 2 */ 'Sobrepeso', 
        /* index 3 */ 'Obesidade grau 1', 
        /* index 4 */ 'Obesidade grau 2', 
        /* index 5 */ 'Obesidade grau 3'
    ];

    // sourcery skip: use-braces
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

// Calcula o valor do imc
function getImc(peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

// Cria um parágrafo
function criaParagrafo() {
    const p = document.createElement('p'); // Cria um parágrafo
    return p
}

// Exibe o resultado
function setResultado(msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';

    const p = criaParagrafo();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p); // Insere o parágrafo na div
}






/* Meu código
function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = form.querySelector('.resultado');

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');

        const imc = peso.value / (altura.value * altura.value)

        resultado.style.backgroundColor = 'orange'
        resultado.style.padding = '3px 15px'
        resultado.style.borderRadius = '3px'

        if (imc < 18.5) {
            resultado.innerHTML = `<p>IMC: ${imc.toFixed(2)} - Abaixo do peso</p>`
        } else if (imc >= 18.5 && imc <= 24.9) {
            resultado.innerHTML = `<p>IMC: ${imc.toFixed(2)} - Peso normal</p>`
            resultado.style.backgroundColor = 'lightgreen'
        } else if (imc >= 25 && imc <= 29.9) {
            resultado.innerHTML = `<p>IMC: ${imc.toFixed(2)} - Sobrepeso</p>`
        } else if (imc >= 30 && imc <= 34.9) {
            resultado.innerHTML = `<p>IMC: ${imc.toFixed(2)} - Obesidade grau 1</p>`
        } else if (imc >= 35 && imc <= 39.9) {
            resultado.innerHTML = `<p>IMC: ${imc.toFixed(2)} - Obesidade grau 2</p>`
        } else {
            resultado.innerHTML = `<p>IMC: ${imc.toFixed(2)} - Obesidade grau 3</p>`
        }
    }

    form.addEventListener('submit', recebeEventoForm); 
}

meuEscopo();
*/