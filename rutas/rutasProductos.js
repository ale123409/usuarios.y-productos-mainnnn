const express = require("express");
const ruta = express.Router();
const { mostrarProductos, nuevoProducto, borrarProducto, buscarPorId } = require("../bd/productosBD");

// Ruta para obtener todos los productos
ruta.get("/productos", async (req, res) => {
    const productos = await mostrarProductos();
    res.json(productos);
});

// Ruta para buscar un producto por ID
ruta.get("/productos/buscarPorId/:id", async (req, res) => {
    const productoValido = await buscarPorId(req.params.id);
    res.json(productoValido);
});

// Ruta para borrar un producto por ID
ruta.delete("/productos/borrarProducto/:id", async (req, res) => {
    const borrado = await borrarProducto(req.params.id);
    res.json(borrado);
});

// Ruta para agregar un nuevo producto
ruta.post("/productos/nuevoProducto", async (req, res) => {
    const productoValido = await nuevoProducto(req.body);
    res.json(productoValido);
});

module.exports = ruta;
