const { Op } = require('sequelize');
const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const AuthController = {
    store: async (req, res) => {
        try {
            const { name, email, nickname, password } = req.body;
            const hash = bcrypt.hashSync(password, 10);

            const verifyIfUserExists = await User.findOne({
                where: {
                    [Op.or]: [{ nickname }, { email }]
                }
            });

            if (verifyIfUserExists) {
                return res.status(400).json({ error: true, message: "Não foi possível realizar o cadastro!" });
            }

            const newUser = await User.create({ name, email, nickname, password: hash });

            return res.status(201).json({ data: newUser });
        } catch (error) {
            console.log(error);
            if (error.name === "SequelizeConnectionRefusedError") {
                return res.status(500).json({ error: true, message: "Sistema indisponível, tente novamente mais tarde!" })
            }

            if (error.name === "SequelizeUniqueConstraintError") {
                return res.status(400).json(error.parent.sqlMessage);
            }

            if (error.name === "SequelizeValidationError") {
                return res.status(400).json({ error: true, message: `${error.errors[0].type} at ${error.errors[0].path}` })
            }

            return res.status(400).json({ error: true, message: "Falha na requisição, tente novamente!" })
        }

    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ where: { email } });
            console.log(user)

            if (!user || !bcrypt.compareSync(password, user.password)) {
                return res.status(400).json({ message: "Usuário ou senha estão incorretos ou não existe" });
            }

            const data = {
                id: user.id,
                name: user.name,
                nickname: user.nickname,
                email: user.email
            }

            const token = jwt.sign(data, process.env.JWT_KEY, { expiresIn: '1h' });

            return res.status(200).json({ token, message: "Autenticado" });
        } catch (error) {
            console.log(error);
            if (error.name === "SequelizeConnectionRefusedError") {
                return res.status(500).json({ error: true, message: "Sistema indisponível, tente novamente mais tarde!" })
            }

            if (error.name === "SequelizeUniqueConstraintError") {
                return res.status(400).json(error.parent.sqlMessage);
            }

            if (error.name === "SequelizeValidationError") {
                return res.status(400).json({ error: true, message: `${error.errors[0].type} at ${error.errors[0].path}` })
            }

            return res.status(400).json({ error: true, message: "Falha na requisição, tente novamente!" })
        }
    },
};

module.exports = AuthController;