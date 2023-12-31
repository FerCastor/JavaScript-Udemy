const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const contatoController = require("./src/controllers/contatoController");

// Rotas da HOME
route.get("/", homeController.paginaInicial);
route.post("/", homeController.trataPost);

// Rotas de CONTATO
route.get("/contato", contatoController.paginaContato);

module.exports = route;
