// Módulos


const nome = 'Fernanda';
const sobrenome = 'Castor';

const apresentacao = () => nome + ' ' + sobrenome;


// exports.NOME = nome; // A variável não precisa ter o mesmo nome da chave, mas a atribuição do valor precisa ser o nome da chave.
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.apresentacao = apresentacao;
this.teste = 'Teste feito'; // This nesse caso se refere ao módulo, sendo assim, essa linha cria uma exportação no modulo que recebe a string.

/*
Também é possível exportar assim:
apresentacao();
module.exports.nome = nome; // Exporta para o módulo a variável declarada
module.exports.sobrenome = sobrenome; // Exporta para o módulo a variável declarada
module.exports.apresentacao = apresentacao; // Exporta para o módulo a variável
*/

