function Calculadora() {
    // Atributos
    this.display = document.querySelector('.display'), // público

        // Métodos

        this.inicia = () => {
            this.capturaCliques();
            this.capturaEnter();
        };

        // Captura onde foi clicado
        this.capturaCliques = () => {
            document.addEventListener('click', event => {
                // elemento vai referir-se ao objeto que foi clicado
                const elemento = event.target;
                if (elemento.classList.contains('btn-num')) {
                    this.addNumDisplay(elemento)
                }
                if (elemento.classList.contains('btn-clear')) {
                    this.clear(elemento)
                }
                if (elemento.classList.contains('btn-del')) {
                    this.del()
                }
                if (elemento.classList.contains('btn-eq')) {
                    this.realizaConta()
                }
            }
        )};

        

        // Exibe o valor do botão no display
        this.addNumDisplay = elemento => {
            this.display.value += elemento.innerText;
        }

        this.clear = () => {
            this.display.value = ''
        }

        this.del = () => {
            this.display.value = this.display.value.slice(0, -1)
        }

        this.realizaConta = () => {
            try {
                const conta = eval(this.display.value);

                if (!conta) {
                    alert('Conta inválida!')
                    return;
                }

                this.display.value = conta
            } catch (err) {
                alert('Conta inválida');
                return;
            }
        }

        this.capturaEnter = () => {
            document.addEventListener('keydown', e => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.realizaConta();
                }
            });
        }


};


const calculadora = new Calculadora();
calculadora.inicia();