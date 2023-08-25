exports.middlewareGlobal = (req, res, next) => {
    res.locals.variavelLocal = 'Valor da variável local'
    next();
};

exports.checkCsrfError = (err, req, res, next) => {
    if (err && 'EBADCSRFTOKEN' === err.code) {
        return res.send('404');
    }
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};