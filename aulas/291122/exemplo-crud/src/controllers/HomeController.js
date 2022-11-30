const HomeController = {
    showHome: (req, res) => {
        res.send('Página inicial');
    },

    showContato: (req, res) => {
        res.send('Página de contato')
    },

    showLogin: (req, res) => {
        res.send('Página de login')
    },

    showCadastro: (req, res) => {
        res.send('Faça o seu cadastro')
    }
};

module.exports = HomeController;