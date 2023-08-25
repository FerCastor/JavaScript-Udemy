exports.paginaInicial = (req, res) => {
	res.render("index", {
		titulo: "Título da Página",
		numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
	});
	return;
};

exports.trataPost = (req, res) => {
	res.send(req.body);
	return;
};

/* 
const HomeModel = require("../models/HomeModel");

// Busca todos os objetos no banco e exibe no console
HomeModel.find()
	.then((dados) => console.log(dados))
	.catch((e) => console.log(e)); */

/* // Cria um objeto no banco de dados
HomeModel.create({
    titulo: 'Segundo item',
    descricao: 'Mais uma descrição'
    })
.then(dados => console.log(dados))
.catch(e => console.log(e)) */
