const express = require("express");
const estadoController = require ("../controllers/estadoController");
const router = express.Router();

router.get("/", estadoController.listarEstados);
router.get("/:id", estadoController.listarEstadosId);
router.post("/", estadoController.agregarEstados);
router.put("/:id", estadoController.actualizarEstados);
router.delete("/:id", estadoController.eliminarEstados);

module.exports = router;