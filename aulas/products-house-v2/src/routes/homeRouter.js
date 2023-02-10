const express = require('express');
const HomeController = require('../controllers/HomeController');
const isLogin = require("../middlewares/isLogin")


const router = express.Router();

router.use(isLogin)
router.get('/', HomeController.showHome);
router.get('/produtos/:id', HomeController.showProduto);

module.exports = router;