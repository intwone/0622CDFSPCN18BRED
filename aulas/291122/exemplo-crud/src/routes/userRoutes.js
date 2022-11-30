const express = require('express');
const UserController = require('../controllers/UserController')

const router = express.Router();

router.get('/usuarios', UserController.showUsuarios);

module.exports = router;