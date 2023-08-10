function mostraHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
    });
}

console.log(mostraHora());


// Cria um timer que executa o script a cada segundo
const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);


// Cria um controlador do timer que para a execução do script após 10 segundos
setTimeout(function() {
    clearInterval(timer);
}, 10000);


setTimeout(function() {
    console.log('Olá, mundo!')
}, 5000);