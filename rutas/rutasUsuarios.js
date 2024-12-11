const express = require("express");
const ruta = express.Router();
const { mostrarUsuarios, nuevoUsuario, borrarUsuario, buscarPorId } = require("../bd/usuariosBD");

// Ruta para obtener todos los usuarios
ruta.get("/usuarios", async (req, res) => {
    const usuarios = await mostrarUsuarios();
    res.json(usuarios);
});

// Ruta para buscar un usuario por ID
ruta.get("/usuarios/buscarPorId/:id", async (req, res) => {
    const usuarioValido = await buscarPorId(req.params.id);
    res.json(usuarioValido);
});

// Ruta para borrar un usuario por ID
ruta.delete("/usuarios/borrarUsuario/:id", async (req, res) => {
    const borrado = await borrarUsuario(req.params.id);
    res.json(borrado);
});

// Ruta para agregar un nuevo usuario
ruta.post("/usuarios/nuevoUsuario", async (req, res) => {
    const usuarioValido = await nuevoUsuario(req.body);
    res.json(usuarioValido);
});

module.exports = ruta;
