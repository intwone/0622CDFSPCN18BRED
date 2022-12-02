const HomeController = {
    showHome: (req, res) => {
        return res.render('home')
    },

    showProduto: (req, res) => {
        return res.render('produto');
    }
};

module.exports = HomeController;