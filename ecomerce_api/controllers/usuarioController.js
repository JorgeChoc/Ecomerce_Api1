const db = require("../models/db");


// GET /estados

exports.listarUsuarios = async (req, res) => {
    const sql =  'CALL obtener_usuarios()';
  
    try {
      const [usuarios, fields] = await db.query(sql);
      res.status(200).json(usuarios);
    } catch (err) {
      res.status(500).send({ mensaje: "Error en el servidor" }, { error: err });
    }
  };

  exports.listarUsuariosId = async (req, res) => {
    const id = req.params.id;
  
    // Consulta SQL para buscar un usuario por ID
    const sql = `
      SELECT id_usuario, nombre_usuario, apellido_usuario, email, password, nombre_rol
      FROM usuarios
      INNER JOIN roles ON usuarios.id_rol = roles.id_rol
      WHERE id_usuario = ?;`;
  
    try {
      const [rows, fields] = await db.query(sql, [id]);
  
      if (rows.length === 0) {
        res.status(404).send({ mensaje: "Usuario no encontrado" });
        return;
      }
      res.status(200).json(rows[0]);
    } catch (err) {
      res.status(500).send({ mensaje: "Error al buscar el usuario", error: err });
    }
  };
  

  exports.agregarUsuarios = async (req, res) => {
    const { nombre_usuario, apellido_usuario, email, password, id_rol } = req.body;
    const sql = "INSERT INTO usuarios (nombre_usuario, apellido_usuario, email, password, id_rol) VALUE (?,?,?,?,?)";
  
    try {
      const resultado = await db.query(sql, [nombre_usuario, apellido_usuario, email, password, id_rol]);
      res.status(200).send({ id: resultado.idInsertado, ...req.body });
    } catch (err) {
      res
        .status(500)
        .send({ mensaje: "Error al insertar la categoria" }, { error: err });
    }
  };

  exports.actualizarUsuarios = async (req, res) => {
    const id = req.params.id;
    const { nombre_usuario } = req.body;
  
    const sql =
      "UPDATE usuarios SET nombre_usuario = ? WHERE id_usuario = ?";
  
    try {
      await db.query(sql, [nombre_usuario, id]);
      res.status(200).send({ mensaje: "Usuario actualizado" });
    } catch (err) {
      res
        .status(500)
        .send({ mensaje: "Error al actualizar el usuario" }, { error: err });
    }
  };

  exports.eliminarUsuarios = async (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM usuarios WHERE id_usuario = ?";
  
    try {
      await db.query(sql, [id]);
      res.status(200).send({ mensaje: "usuario eliminado" });
    } catch (err) {
      res
        .status(500)
        .send({ mensaje: "Error al eliminar el usuario" }, { error: err });
    }
  };