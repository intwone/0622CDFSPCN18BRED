const { randomUUID } = require('crypto');
const productsModel = require('../models/productsModel');
const produtoModel = require('../models/productsModel');

const AdminController = {
    showLogin: (req, res) => {
        return res.render('admin/auth/login');
    },

    showHome: (req, res) => {
        const url = req.originalUrl;
        const products = produtoModel.findAll();

        return res.render('admin/home', {url, products});
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
        const { id } = req.params

        const productFound = database.products.find(product => product.id === id)

        return res.render('admin/products/editar', { url, product: productFound });
    },

    login: (req, res) => {
        const users = database.users
        const { email, password } = req.body

        const userFound = users.find((user) => user.email === email)

        if (!userFound) {
            console.log('Usuário não existe')
            return
        }

        const isValidPassword = userFound.password === password

        if (!isValidPassword) {
            console.log('E-mail ou senha inválida')
            return
        }

        if (!userFound.isAdmin) {
            return res.redirect('/')
        }

        return res.redirect('/admin/home')
    },

    storeProduto: (req, res) => {
        const {name, price, active, stock, description} = req.body

        const image = `/images/${req.file.filename}`

        const newProduct = {
            id: randomUUID(),
            name,
            price,
            image,
            active,
            stock: stock === 'on' ? true : false,
            description
        }

        productsModel.create(newProduct);

        return res.redirect('/admin/home')
    },

    updateProduto: (req, res) => {
        const {name, price, image, active, stock, description} = req.body
        const { id } = req.params

        const indexProduct = database.products.findIndex(product => product.id === id)
        
        const editedProduct = {
            id,
            name,
            price,
            image,
            active,
            stock,
            description
        }

        database.products.splice(indexProduct, 1, editedProduct);
        return res.redirect('/admin/home')
    },
    
    deleteProduto: (req, res) => {
        const { id } = req.params

        const indexProduct = database.products.findIndex(product => product.id === id)

        database.products.splice(indexProduct, 1)

        return res.redirect('/admin/home')
    }
};

module.exports = AdminController;