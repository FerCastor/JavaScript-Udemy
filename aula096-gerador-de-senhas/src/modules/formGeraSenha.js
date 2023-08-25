import geraSenha from './geradores';

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkNumbers = document.querySelector('.chk-numeros');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha'); // Use a classe para selecionar o botão

export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    });
};

function gera() {
    const senha = geraSenha(
        qtdCaracteres.value,
        chkNumbers.checked,
        chkMaiusculas.checked, 
        chkMinusculas.checked,
        chkSimbolos.checked,
    );
    return senha || 'Nada selecionado.';
}
