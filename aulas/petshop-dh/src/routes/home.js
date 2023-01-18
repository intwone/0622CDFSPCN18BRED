const express = require('express');
const HomeController = require('../controllers/HomeController');

const router = express.Router();

router.get('/', HomeController.showHomePage);
router.get('/sobre', HomeController.showSobre);
router.get('/login', HomeController.showLogin);
router.get('/contato', HomeController.showContato);
router.get('/servicos', HomeController.showServicos);



module.exports = router;