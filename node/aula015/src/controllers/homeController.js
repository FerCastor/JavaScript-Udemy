exports.paginaInicial = (req, res) => {
/* 	req.flash('info', 'Olá, Mundo!');
	req.flash('error', 'Error!');
	req.flash('success', 'Success!'); */
	console.log(req.flash('error'), req.flash('success'), req.flash('info'))
	res.render("index");
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