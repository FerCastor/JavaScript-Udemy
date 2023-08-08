const numero = Number(prompt('Digite um número:'));
const raiz = Math.sqrt(numero);
const inteiro = Number.isInteger(numero)
const ehNaN = Number.isNaN(numero)
const arr_baixo = Math.floor(numero)
const arr_cima = Math.ceil(numero)
const com_decimal = numero.toFixed(2)

let titulo = document.getElementById('numero_titulo')
titulo.innerHTML = numero

let texto = document.getElementById('texto')
texto.innerHTML = `<p>Raíz quadrada: <strong>${raiz}</strong></p>`
texto.innerHTML += `<p>${numero} é inteiro: <strong>${inteiro}</strong></p>`
texto.innerHTML += `<p>É NaN: <strong>${ehNaN}</strong></p>`
texto.innerHTML += `<p>Arredondando para baixo: <strong>${arr_baixo}</strong></p>`
texto.innerHTML += `<p>Arredondando para cima: <strong>${arr_cima}</strong></p>`
texto.innerHTML += `<p>Com duas casas decimais: <strong>${com_decimal}</strong></p>`