const AuthController = {
    showCadastro: (req, res) => {
        return res.render('auth/cadastro')
    },

    showLogin: (req, res) => {
        return res.render('auth/login')
    }
};

module.exports = AuthController;