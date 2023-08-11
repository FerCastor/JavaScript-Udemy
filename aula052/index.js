// ESCOPO LÉXICO
// A função busca variável declarada no seu nível acima caso não encontre a variável declarada dentro de seu escopo
// A função sabe onde foi declarada e quem são seus vizinhos
// Nenhuma alteração feita em volta de uma função mexe em seu escopo léxico

const nome = 'Fernanda';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    falaNome();
}

usaFalaNome();