exports.paginaInicial= (req, res) =>{
    res.render('index');
}

exports.trataPost = (req, res) => {
    res.send('E aí!? Sou sua nova rota de POST!')
}