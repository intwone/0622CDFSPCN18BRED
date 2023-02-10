const testeMiddleware = (req, res, next) => {
    console.log("Estou vendo o que você está solicitando");
    return next();
}

module.exports = testeMiddleware;