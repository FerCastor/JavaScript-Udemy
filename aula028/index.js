/*
    EM JAVASCRIPT O MÊS COMEÇA NO 0, INDO ATÉ 11, ONDE 0 É JANEIRO E 11 É DEZEMBRO
    Parâmetros para o date: ano, mes, dia, hora, minutos, segundos, milissegundos [parâmetros enviados como numeros literais]
    Também podemos utilizar o formato string. Exemplo: const data = new Date('2023-03-01 20:20:00') [Nesse caso o mês é normalizado, voltando a ser 1-12]
*/

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = data.getFullYear();
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundo = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`
}

const data = new Date();
const dataBrasil = formataData(data)
console.log(dataBrasil)












// const tresHoras = 60 * 60 * 3 * 1000 // 60 segundos * 60 minutos * 3 horas * 1000 milissegundos
// const umDia = 60 * 60 * 24 * 1000
// const data = new Date(0 + tresHoras);

// const data = new Date();
// console.log(data.toString());
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1); // Mês começa do zero
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Minutos', data.getMinutes());
// console.log('Segundos', data.getSeconds());
// console.log('Milissegundos', data.getMilliseconds());
// console.log('Dia da semana', data.getDay()); // 0 -> Domingo || 6 -> Sábado
// console.log(Date.now())

