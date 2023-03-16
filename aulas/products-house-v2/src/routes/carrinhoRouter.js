const express = require('express');
const router = express.Router();
const CarrinhoController = require('../controllers/CarrinhoController');
const isLogin = require('../middlewares/isLogin');

router.use(isLogin);
router.get('/carrinho', CarrinhoController.show);
router.post('/carrinho/adicionar', CarrinhoController.addCart);
router.delete('/carrinho/:id/deletar', CarrinhoController.removeCart);

module.exports = router;