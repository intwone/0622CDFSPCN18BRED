const express = require('express');
const AuthController = require('../controllers/AuthController');

const router = express.Router();

router.get('/cadastro', AuthController.showCadastro);
router.post('/cadastro', AuthController.store);
router.get('/login', AuthController.showLogin);
router.post('/login', AuthController.login);


module.exports = router;