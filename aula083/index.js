// Métodos de Instâncias e Estáticos
// Pode-se dizer que a instância é um objeto que foi criado com a palavra new
// Os métodos estáticos não tem acesso aos dados da instância

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Método de instância
    ligar() {
        console.log(`TV ligada! Volume: ${this.volume}`)
    }

    // Método de instância
    aumentarVolume() {
        if (this.volume >= 100) {
            return
        }
        this.volume += 2;
        console.log(`Volume: ${this.volume}`)
    }
    
    // Método de instância
    diminuirVolume() {
        if (this.volume === 0) {
            return
        }
        this.volume -= 2;
        console.log(`Volume: ${this.volume}`)
    }

    // Método estático -> referente a classe (só pode ser chamado pela classe)
    static trocaPilha() {
        console.log('Pilha trocada!')
    }
}

const controle1 = new ControleRemoto('Samsung');
controle1.ligar();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.diminuirVolume();
ControleRemoto.trocaPilha();