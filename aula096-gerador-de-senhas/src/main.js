import './assets/css/style.css';

const qtdCaracteres = document.querySelector('#qtd-caracteres');
const addNumber = document.querySelector('#add-numeros');
const maiusculas = document.querySelector('#letra-upper');
const minusculas = document.querySelector('#letra-lower');
const especiais = document.querySelector('#simbolos');
const botao = document.querySelector('.btn-enviar'); // Use a classe para selecionar o botão

function getPassword() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";
    let passwordLength = Number(qtdCaracteres.value);
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    console.log(password);
}

botao.addEventListener('click', getPassword);
