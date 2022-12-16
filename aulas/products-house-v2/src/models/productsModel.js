const database = require('../database/db.json');
const fs = require('fs');
const path = require('path');
const pathDb = path.resolve("src", "database", "db.json");

const productsModel = {
    //Método que irá procurar todos os produtos do banco de dados
    findAll: () => {
        return database.products;
    },

    //Método que ira procurar somente 1 produto
    findByPk: (id) => {
        const product = database.products.find(product => product.id === id);
        return product;
    },

    //Método que irá criar um produto no banco de dados
    create: (product) => {
        database.products.push(product);

        const dbJson = JSON.stringify(database);
        fs.writeFileSync(pathDb, dbJson, "utf8");
    },

    //Método que irá atualizar um produto no banco de dados
    update: (id, product) => {},

    //Metodo que irá deletar um produto no banco de dados
    delete: (id) => {}
}

module.exports = productsModel;