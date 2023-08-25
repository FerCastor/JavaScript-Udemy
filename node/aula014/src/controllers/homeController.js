const HomeModel = require("../models/HomeModel");

// Busca todos os objetos no banco e exibe no console
HomeModel.find()
	.then((dados) => console.log(dados))
	.catch((e) => console.log(e));

/* // Cria um objeto no banco de dados
HomeModel.create({
    titulo: 'Segundo item',
    descricao: 'Mais uma descrição'
    })
.then(dados => console.log(dados))
.catch(e => console.log(e)) */

exports.paginaInicial = (req, res) => {
	res.render("index");
	return;
};

exports.trataPost = (req, res) => {
	res.send(req.body);
	return;
};
