// Método SPLICE (esse método mexe na array principal, assim como pop e push)
// variavel.splice(indice atual, quantidade elementos que serão apagados, elementos a adicionar (separar com virgula))

const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
const removidos = nomes.splice(-3, 1);
console.log(`Lista: ${nomes} || Removidos da lista: ${removidos}`)
console.log(nomes)

const nomes2 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
const removidos2 = nomes2.splice(-2, Number.MAX_VALUE);
console.log(`Lista: ${nomes2} || Removidos da lista: ${removidos2}`)
console.log(nomes2)