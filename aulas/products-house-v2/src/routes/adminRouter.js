const express = require('express');
const AdminController = require('../controllers/AdminController');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve("src", "public", "images"))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '_produto_';
      cb(null, uniqueSuffix + file.originalname)
    }
})
  
const upload = multer({ storage: storage });


const router = express.Router();

router.get('/admin/login', AdminController.showLogin);
router.get('/admin/home', AdminController.showHome);
router.get('/admin/dashboard', AdminController.showDashboard);
router.get('/admin/produtos/cadastro', AdminController.showCadastroProdutos);
router.get('/admin/produtos/:id/editar', AdminController.showEditarProdutos);

router.post('/admin/login', AdminController.login)
router.post('/admin/produtos/cadastro', upload.single('image') ,AdminController.storeProduto)
router.put('/admin/produtos/:id/editar', AdminController.updateProduto)
router.delete('/admin/produtos/:id/deletar', AdminController.deleteProduto)

module.exports = router;