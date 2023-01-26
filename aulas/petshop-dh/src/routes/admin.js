const express = require('express');
const AdminController = require("../controllers/AdminController");

const router = express.Router();

router.get("/servicos", AdminController.listServices);
router.get("/servicos/create", AdminController.showCreateService);
router.post("/servicos/create", AdminController.storeService);
router.get("/servicos/:id/edit", AdminController.showEditService);
router.put("/servicos/:id/edit", AdminController.updateService);
router.delete("/servicos/:id/delete", AdminController.deleteService);

module.exports = router;