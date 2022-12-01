const express = require('express');
const UserController = require('../controllers/UserController')

const router = express.Router();

router.get('/usuarios', UserController.showUsuarios);

router.post('/usuarios', UserController.store);

router.get('/usuarios/:id', UserController.showUsuario);


module.exports = router;