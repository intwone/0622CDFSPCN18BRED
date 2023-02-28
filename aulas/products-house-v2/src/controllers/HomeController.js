const productsModel = require('../database/productsModel');

const HomeController = {
    showHome: (req, res) => {
        const products = productsModel.findAll();

        return res.render('home', {
            products
        })

    },

    showProduto: (req, res) => {
        const { id } = req.params;

        const product = productsModel.findByPk(id)


        return res.render('produto', { product });
    }
};

module.exports = HomeController;
