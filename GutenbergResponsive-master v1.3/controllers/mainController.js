//TODO: agregar el path
const path = require('path');

//TODO: crear el mainController con el index, login, registro, carrito compras. detalle producto 
const mainController = {
    home: (req, res) => {
    res.sendFile(path.resolve(__dirname + '../views/index.html'));
    },

    detalleproducto: (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/detalle-producto.html'));
    },

    carritocompras: (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/carrito-compras.html'));
    },

    login: (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/login.html'));
    },

    registro: (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/registro.html'));
    },
};

//TODO: agregar exportar el modulo
module.exports = mainController;