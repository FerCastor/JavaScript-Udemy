// Import / Export
// Deve ser importado com o mesmo nome que foi exportado

// import * as MeuModulo from './modulo1';
import multiplica, {nome, sobrenome, idade, soma} from './modulo1';

// A importação default deve ser nomeada fora da chave
// import { nome as nomeImportado, sobrenome, idade, soma, Pessoa } from './modulo1';

// const nome = 'Anna';
// console.log(nome)
console.log(nome, sobrenome, idade);
console.log(multiplica(5, 5));

// const pessoa1 = new MeuModulo.Pessoa(MeuModulo.nome, MeuModulo.sobrenome);
// console.log(pessoa1)


