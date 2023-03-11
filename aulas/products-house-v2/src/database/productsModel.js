<<<<<<< HEAD:aulas/products-house-v2/src/database/old/productsModel.js
const database = require('../db.json');
=======
const database = require('./db.json');
>>>>>>> 78d45166fc95424bd76e169cb17bfabdaf8c55ca:aulas/products-house-v2/src/database/productsModel.js
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
    update: (id, product) => { },

    //Metodo que irá deletar um produto no banco de dados
    delete: (id) => { }
}

module.exports = productsModel;
