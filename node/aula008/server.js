const express = require('express');
const app = express();

// Trata o dado enviado na requisição para que seja exibido corretamente
app.use(express.urlencoded({ extended: true }));

// Responde a solicitação do usuario
app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
        Nome do cliente: <input type="text" name="nome">
        <button>Enviar</button>
    </form>
    `);
});

// Recebe os parâmetros na url
app.get('/testes/:idUsuario?/:parametro?', (req, res) => {
    // params refere-se as partes que aparecem na rota da URL [ /profiles/3]
    console.log(req.params);
    // query refere-se a query strings que são enviadas na url [ /profiles/?chave1=valor1&chave2=valor2]
    console.log(req.query);
    // res.send(req.params); // Retorna os parâmetros da url
    res.send(req.query.facebook);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Você me enviou: ${req.body.nome}`); 
})

// Ouvinte aguardando a solicitação do usuario
app.listen(3000, () => {
    console.log('Servidor executando na porta 3000')
    console.log('Acessar http://localhost:3000')
});

