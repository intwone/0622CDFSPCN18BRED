const HomeController = {
    showHomePage: (req, res) => {
        return res.render("index");
    },

    showSobre: (req, res) => {
        return res.render("sobre");

    },

    showLogin: (req, res) => {
        return res.render("login");
    },

    showContato: (req, res) => {
        return res.render("contato");
    },

    showServicos: (req, res) => {
        return res.render("servicos");

    },

}

module.exports = HomeController;