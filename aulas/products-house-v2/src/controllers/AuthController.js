const User = require("../database/User");
const bcrypt = require("bcryptjs");

const AuthController = {
    showCadastro: (req, res) => {
        return res.render('auth/cadastro')
    },

    showLogin: (req, res) => {
        return res.render('auth/login')
    },

    store: (req, res) => {
        const { name, email, password } = req.body;

        const verifyExists = User.findOne(email)

        if (verifyExists) {
            return res.render('auth/cadastro', { error: "Não foi possível realizar a operação" })
        }

        const hash = bcrypt.hashSync(password, 10);

        const newUser = { name, email, hash };
        User.create(newUser)

        return res.redirect("/login")

    },

    login: (req, res) => {
        const { email, password } = req.body;

        const user = User.findOne(email);
        const verifyPassword = bcrypt.compareSync(password, user.password);

        if (!user || !verifyPassword) {
            return res.render("auth/login", { error: "Email já cadastrado ou senha incorreta." })
        }

        req.session.user = user;

        return res.redirect("/")

    }
};

module.exports = AuthController;
