require("dotenv").config(); // Variáveis de ambiente
const express = require("express"); // Exporta express
const app = express(); // Aplica o express numa constante chamada app
const mongoose = require("mongoose"); // Responsável pela modelagem de dados e por garantir que os dados estarão no formato desejado

// Conecta com o banco de dados e emite resolve a promessa, enviando a requisição, buscando os dados de conexão no arquivo .env
mongoose
	.connect(process.env.CONNECTIONSTRING, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.emit("conectado");
	})
	.catch((e) => console.log(e));
const session = require("express-session"); // Identificar o navegador do cliente (salvar cookie no navegador do cliente)
const MongoStore = require("connect-mongo"); // Para falar que as sessões serão salvas no BD 
const flash = require("connect-flash"); // Mensagens auto-destrutivas (perfeito para exibir mensagens de erro ou feedback ao usuário) [sem session essas mensagens não funcionam]
const routes = require("./routes"); // Rotas da aplicação
const path = require("path"); // Trabalhar com caminhos
const helmet = require('helmet'); // Deixa a aplicação mais segura ajustando o cabeçalho
const csrf = require('csurf'); // Tokens que são gerados para o envio dos formulário, impedindo invasões pelo form
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require("./src/middlewares/middleware"); // Funções que são executadas na rota

app.use(helmet()); // 

// Trata o dado enviado na requisição para que seja exibido corretamente
app.use(express.urlencoded({ extended: true }));
app.use(express.json()) 
app.use(express.static(path.resolve(__dirname, "public"))); // Para os arquivos estáticos e que podem ser acessados diretamente

// Configuração da sessão
const sessionOptions = session({
	secret: "segredoexpress",
	store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
	resave: false,
	saveUninitialized: false,
	cookie: {
		maxAge: 1000 * 60 * 60 * 24 * 7, // Sete dias em milissegundos [milissegundos * segundos * minutos * horas * dias]
		httpOnly: true,
	},
});

app.use(sessionOptions);
app.use(flash());

app.set("views", path.resolve(__dirname, "src", "views")); // Arquivos que são renderizados na tela
app.set("view engine", "ejs"); // Engine utilizada para renderizar o html [ejs são views]

app.use(csrf()); // Configurando csrf
// Nossos middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);
app.on("conectado", () => {
	// Ouvinte aguardando a solicitação do usuario
	app.listen(3000, () => {
		console.log("Servidor executando na porta 3000");
		console.log("Acessar http://localhost:3000");
	});
});
