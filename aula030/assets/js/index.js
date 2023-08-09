const textoData = document.querySelector('.container h1');
const data = new Date();
const option = {
    dateStyle: 'full',
    timeStyle: 'short'
};

textoData.innerHTML = new Intl.DateTimeFormat('pt-br', option).format(new Date());


/* Código do professor */
/*
const textoData = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTexto(diaSemana) {
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    return diasSemana[diaSemana];
}

function getNomeMes(numeroMes) {
    const nomeMes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return nomeMes[numeroMes];
}

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (`${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`);
}

textoData.innerHTML = criaData(data);
*/