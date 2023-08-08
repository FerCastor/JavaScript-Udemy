// Operador ternário
// condição ? bloco true : bloco false

const pontuacaoUsuario = 1000;
const statusUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'black';



console.log(statusUsuario, corPadrao); 

/*
if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal');
}
*/