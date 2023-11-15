const express = require("express");
const usuarioController = require ("../controllers/usuarioController");
const router = express.Router();

router.get("/", usuarioController.listarUsuarios);
router.get("/:id", usuarioController.listarUsuariosId);
router.post("/", usuarioController.agregarUsuarios);
router.put("/:id", usuarioController.actualizarUsuarios);
router.delete("/:id", usuarioController.eliminarUsuarios);

module.exports = router;