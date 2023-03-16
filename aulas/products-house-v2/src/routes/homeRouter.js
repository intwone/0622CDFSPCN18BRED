const express = require('express');
const HomeController = require('../controllers/HomeController');
const CarrinhoController = require('../controllers/CarrinhoController');
//const isLogin = require("../middlewares/isLogin")


const router = express.Router();

//router.use(isLogin)
router.get('/', HomeController.showHome);
//router.get('/carrinho', CarrinhoController.show);

router.get('/produtos/:id', HomeController.showProduto);

module.exports = router;