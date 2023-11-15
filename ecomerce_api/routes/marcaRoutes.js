const express = require("express");
const marcaController = require ("../controllers/marcaController");
const router = express.Router();

router.get("/", marcaController.listarMarcas);
router.get("/:id", marcaController.listarMarcasId);
router.post("/", marcaController.agregarMarcas);
router.put("/:id", marcaController.actualizarMarcas);
router.delete("/:id", marcaController.eliminarMarcas);

module.exports = router;