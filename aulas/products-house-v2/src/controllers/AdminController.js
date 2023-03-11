const { randomUUID } = require('crypto');
const productsModel = require('../database/productsModel');
const produtoModel = require('../database/productsModel');

const { Product, Category } = require('../models')

const AdminController = {
    showLogin: (req, res) => {
        return res.render('admin/auth/login');
    },

    showHome: async (req, res) => {
        const url = req.originalUrl;
        const products = await Product.findAll({
            include: {
                model: Category,
                as: 'category'
            }
        })

        return res.render('admin/home', { url, products });
    },

    showDashboard: (req, res) => {
        const url = req.originalUrl;
        return res.render('admin/dashboard', { url });
    },

    showCadastroProdutos: async (req, res) => {
        const url = req.originalUrl;

        const categories = await Category.findAll()

        return res.render('admin/products/cadastro', { url, categories });
    },

    showEditarProdutos: async (req, res) => {
        const url = req.originalUrl;
        const { id } = req.params

        //const productFound = database.products.find(product => product.id === id)

        // SELECT * FROM products WHERE id = id
        const productFound = await Product.findOne({
            where: {
                id
            }
        })

        // const productFound = await Product.findByPk(id)

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

    storeProduto: async (req, res) => {
        const { name, price, active, stock, description, category } = req.body

        const image = `/images/${req.file.filename}`

        const newProduct = {
            id: randomUUID(),
            name,
            price,
            image,
            active: active === 'on' ? true : false,
            stock: stock === 'on' ? true : false,
            description,
            category_id: category
        }
        await Product.create(newProduct);
        return res.redirect('/admin/home')
    },

    updateProduto: async (req, res) => {
        const { name, price, image, active, stock, description } = req.body
        const { id } = req.params

        const editedProduct = {
            id,
            name,
            price,
            image,
            active: active === 'on' ? true : false,
            stock: stock === 'on' ? true : false,
            description
        }

        await Product.update(editedProduct, {
            where: { id }
        })
        return res.redirect('/admin/home')
    },

    deleteProduto: async (req, res) => {
        const { id } = req.params
        await Product.destroy({
            where: { id }
        })
        return res.redirect('/admin/home')
    }
};

module.exports = AdminController;
