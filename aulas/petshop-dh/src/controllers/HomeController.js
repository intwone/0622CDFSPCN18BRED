const Servico = require("../model/Servico")

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
        const servicos = Servico.findAll();

        return res.render("servicos", { servicos });
    },

}

module.exports = HomeController;