const express = require('express');
const UsersController = require('../controllers/UsersController');

const router = express.Router();

router.get("/users", UsersController.listAll);
router.get("/users/:id", UsersController.listOne);
router.post("/users", UsersController.create);
router.delete("/users/:id", UsersController.delete);

module.exports = router;