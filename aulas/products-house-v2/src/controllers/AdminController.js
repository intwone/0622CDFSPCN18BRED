const AdminController = {
    showLogin: (req, res) => {
        return res.render('admin/auth/login');
    },

    showHome: (req, res) => {
        const url = req.originalUrl;

        return res.render('admin/home', {url});
    },

    showDashboard: (req, res) => {
        const url = req.originalUrl;
        return res.render('admin/dashboard', {url});
    },

    showCadastroProdutos: (req, res) => {
        const url = req.originalUrl;
        return res.render('admin/products/cadastro', {url});
    },

    showEditarProdutos: (req, res) => {
        const url = req.originalUrl;
        return res.render('admin/products/editar', {url});
    },

};

module.exports = AdminController;