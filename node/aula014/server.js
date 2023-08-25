require('dotenv').config();
const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");
const { middlewareGlobal } = require('./src/middlewares/middleware');
const mongoose = require("mongoose");

// Conecta com o banco de dados, buscando os dados de conexão no arquivo .env
mongoose
	.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		app.emit("conectado");
	})
	.catch(e => console.log(e));

// Trata o dado enviado na requisição para que seja exibido corretamente
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

// Nossos middlewares
app.use(middlewareGlobal);
app.use(routes);
app.on("conectado", () => {
	// Ouvinte aguardando a solicitação do usuario
	app.listen(3000, () => {
		console.log("Servidor executando na porta 3000");
		console.log("Acessar http://localhost:3000");
	});
});
