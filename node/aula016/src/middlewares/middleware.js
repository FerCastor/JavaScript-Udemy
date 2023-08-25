exports.middlewareGlobal = (req, res, next) => {
    res.locals.variavelLocal = 'Valor da variável local'
    next();
};