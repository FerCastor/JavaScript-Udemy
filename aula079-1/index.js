// Objeto Map()
// Mantém a ordem dos dados
// Se o volume de dados for muito grande, compensa mais pegar todos os dados, pois se necessário já estarão dentro do for

const pessoas = [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'},
];

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

/* console.log(novasPessoas)
console.log(novasPessoas.get(2))
console.log(novasPessoas.get(5)) */

for (const [identifier, {id, nome}] of novasPessoas) {
    console.log(identifier, id, nome)
}

novasPessoas.delete(2);
console.log(novasPessoas)


/* for (const pessoas of novasPessoas.keys()) {
    console.log(pessoas)
}

for (const pessoas of novasPessoas.values()) {
    console.log(pessoas)
}

for (const pessoas of novasPessoas.entries()) {
    console.log(pessoas)
} */

/* const novasPessoas = {};
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas[id] = { ...pessoa };
}
 */
