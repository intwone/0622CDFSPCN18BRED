const database = require('../database/usuario.json');
const fs = require('fs');
const path = require('path');
const { v4: gerarId  } = require('uuid');


const UserController = {
    showUsuarios: (req, res) => {
        const usuarios = database;

        res.send(usuarios);
    },

    showUsuario: (req, res) => {
        const { id } = req.params;

        const usuario = database.usuarios.find(usuario => usuario.id == id);

        if(!usuario) {
            return res.send("Usuário não encontrado");
        } 

        return res.send(usuario);

    },

    store: (req, res) => {
        const { nome, email, senha } = req.body;

        const novoUsuario = {
            id: gerarId(),
            nome,
            email,
            senha
        }

        database.usuarios.push(novoUsuario);

        let bancoAtualizado = JSON.stringify(database, null, 4);
        
        fs.writeFileSync(path.resolve("src", "database", "usuario.json"), bancoAtualizado);

        return res.send(novoUsuario);


        /* let content = fs.readFileSync(path.resolve("src", "database", "usuario.json"));

        const db = JSON.parse(content);

        db.usuarios.push(novoUsuario);
        let usuariosJson = JSON.stringify(db, null, 4);

        fs.writeFileSync(path.resolve("src", "database", "usuario.json"), usuariosJson);

        return res.send(novoUsuario); */

    }

    /* showUsuario: (req, res) => {
        const { id } = req.params;

        let content = fs.readFileSync(path.resolve("src", "database", "usuario.json"), 'utf8');
        const db = JSON.parse(content);
        const usuario = db.usuarios.find(usuario => usuario.id == id);

        return res.send(usuario);
    } */
};

module.exports = UserController;