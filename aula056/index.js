// Factory Function (função fábrica) [Funções que retornam objeto]
// Quando uma função está dentro de um objeto, chamamos ela de método
// =====================================================================
// função construtora)


// Factory Function
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' '); 
            console.log(valor);
        },

        fala(assunto = 'aguardando uma ação.') {
            return `${this.nome} está ${assunto}`
        },
        altura,
        peso,

        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            const nivel = [
                /* index 0 */ 'Abaixo do peso', 
                /* index 1 */ 'Peso normal', 
                /* index 2 */ 'Sobrepeso', 
                /* index 3 */ 'Obesidade grau 1', 
                /* index 4 */ 'Obesidade grau 2', 
                /* index 5 */ 'Obesidade grau 3'
            ];
        
            // sourcery skip: use-braces
            if (indice >= 39.9) return `IMC: ${indice.toFixed(2)} -> ${nivel[5]}`;
            if (indice >= 34.9) return `IMC: ${indice.toFixed(2)} -> ${nivel[4]}`;
            if (indice >= 29.9) return `IMC: ${indice.toFixed(2)} -> ${nivel[3]}`;
            if (indice >= 24.9) return `IMC: ${indice.toFixed(2)} -> ${nivel[2]}`;
            if (indice >= 18.5) return `IMC: ${indice.toFixed(2)} -> ${nivel[1]}`;
            if (indice < 18.5) return `IMC: ${indice.toFixed(2)} -> ${nivel[0]}`;

        }
    };
}

const pessoa1 = criaPessoa('Fernanda', 'Castor', 1.70, 50.0);
const pessoa2 = criaPessoa('Roberta', 'Castor', 1.60, 55);

console.log(pessoa1.nomeCompleto);

console.log();

pessoa1.nomeCompleto = 'Fernanda Castor';
console.log(pessoa1.fala());
console.log(pessoa1.imc);
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

console.log();

console.log(pessoa2.nomeCompleto);
// console.log(pessoa2.fala('falando sobre RI'));
console.log(pessoa2.imc)

