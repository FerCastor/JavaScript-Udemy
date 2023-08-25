const express = require('express');
const app = express();
const routes = require('./routes')

// Trata o dado enviado na requisição para que seja exibido corretamente
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// Ouvinte aguardando a solicitação do usuario
app.listen(3000, () => {
    console.log('Servidor executando na porta 3000')
    console.log('Acessar http://localhost:3000')
});