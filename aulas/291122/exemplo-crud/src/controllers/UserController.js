const database = require('../database/usuario');

const UserController = {
    showUsuarios: (req, res) => {
        res.send(database);
    }
};

module.exports = UserController;