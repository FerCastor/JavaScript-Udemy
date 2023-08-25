function Calculator() {
    // Atributos
    this.display = document.querySelector('.display'), // público

        // Métodos
        // Inicia a calculadora
        this.inicia = () => {
            this.capturaCliques();
            this.capturaEnter();
            this.capturaEsc();
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
        this.addNumDisplay = elemento => this.display.value += elemento.innerText;

        // Limpa o display
        this.clear = () => this.display.value = '';

        // Remove o último valor que foi inserido
        this.del = () => this.display.value = this.display.value.slice(0, -1);

        // Retorna o resultado da conta
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
        };

        // Verifica quando o Enter é apertado e realiza a conta quando pressionado
        this.capturaEnter = () => {
            document.addEventListener('keydown', e => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.realizaConta();
                }
            });
        };
        
        this.capturaEsc = () => {
            document.addEventListener('keydown', e => {
                if (e.key === 'Escape') {
                    e.preventDefault();
                    this.clear();
                }
            })
        }

        this.capturaBackspace = () => {
            document.addEventListener('keydown', e => {
                if (e.key === 'Backspace') {
                    e.preventDefault();
                    this.del();
                }
            })
        }
};


const calculator = new Calculator();
calculator.inicia();
