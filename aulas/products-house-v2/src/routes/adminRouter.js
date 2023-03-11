const express = require('express');
const AdminController = require('../controllers/AdminController');
const CategoryController = require('../controllers/CategoryController');
const upload = require('../middlewares/upload');
const isLogin = require("../middlewares/isLogin");
const isAdmin = require("../middlewares/isAdmin");

const router = express.Router();

router.use(isLogin);
router.use(isAdmin);

router.get('/admin/login', AdminController.showLogin);
router.get('/admin/home', AdminController.showHome);
router.get('/admin/dashboard', AdminController.showDashboard);
router.get('/admin/produtos/cadastro', AdminController.showCadastroProdutos);
router.get('/admin/produtos/:id/editar', AdminController.showEditarProdutos);

router.get('/admin/categories', CategoryController.index)
router.get('/admin/categories/new', CategoryController.new)
router.post('/admin/categories', CategoryController.create)

router.post('/admin/login', AdminController.login)
router.post('/admin/produtos/cadastro', upload.single('image'), AdminController.storeProduto)
router.put('/admin/produtos/:id/editar', AdminController.updateProduto)
router.delete('/admin/produtos/:id/deletar', AdminController.deleteProduto)

module.exports = router;
