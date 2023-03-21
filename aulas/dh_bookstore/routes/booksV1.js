const express = require('express');
const router = express.Router();
const BooksController = require('../controllers/BooksController');
const verifyToken = require('../middlewares/verifyToken');

router.get("/", BooksController.index);
router.get("/:id", BooksController.show);

router.use(verifyToken);
router.post("/", BooksController.store);
router.put("/:id", BooksController.edit);
router.delete("/:id", BooksController.delete);


module.exports = router;