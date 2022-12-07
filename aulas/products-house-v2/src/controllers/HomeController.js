const database = require('../database/db.json');

const HomeController = {
    showHome: (req, res) => {
        const products = database.products;

        return res.render('home', {
            products
        })
    },

    showProduto: (req, res) => {
        const { id } = req.params;

        const product = database.products.find(product => product.id === id);


        return res.render('produto', {product});
    }
};

module.exports = HomeController;