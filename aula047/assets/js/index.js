const relogio = document.querySelector('.displayTimer');
const iniciar = document.querySelector('#btnIniciar');
const pausar = document.querySelector('#btnPausar');
const zerar = document.querySelector('#btnZerar');
let seconds = 0;
let timer;


function getTimeFromSeconds(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC',
    });
}


// Inicia o contador
function timerInit() {
    timer = setInterval(() => {
        seconds++;
        relogio.innerText = getTimeFromSeconds(seconds)
    }, 1000);
}

// Adiciona um ouvinte para o evento de click no botão
iniciar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.style.color = 'green'; 
    timerInit();
});

// Adiciona um ouvinte para o evento de click no botão
pausar.addEventListener('click', function (event) {
    relogio.style.color = 'red'; 
    clearInterval(timer);
});

// Adiciona um ouvinte para o evento de click no botão
zerar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    seconds = 0;
    relogio.style.color = 'black';   
});