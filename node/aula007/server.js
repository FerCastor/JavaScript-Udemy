const express = require('express');
const app = express();

// Responde a solicitação do usuario
app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
        Nome do cliente: <input type="text" name="nome">
        <button>Enviar</button>
    </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato conosco!')
})

// Ouvinte aguardando a solicitação do usuario
app.listen(3000, () => {
    console.log('Servidor executando na porta 3000')
    console.log('Acessar http://localhost:3000')
});