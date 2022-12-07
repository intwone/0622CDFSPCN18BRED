const express = require('express');
const AdminController = require('../controllers/AdminController');

const router = express.Router();

router.get('/admin/login', AdminController.showLogin);
router.get('/admin/home', AdminController.showHome);
router.get('/admin/dashboard', AdminController.showDashboard);
router.get('/admin/produtos/cadastro', AdminController.showCadastroProdutos);
router.get('/admin/produtos/:id/editar', AdminController.showEditarProdutos);



module.exports = router;