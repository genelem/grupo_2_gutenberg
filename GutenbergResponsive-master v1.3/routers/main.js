//TODO: agregar express
const express = require('express');

//TODO: agregar el mainController
const mainController = require('../controllers/mainController');

//TODO: agregar el router
const router = express.Router();

//TODO: agregar el controller home, registro, login, carrito de compras, detalle producto
router.get('/', mainController.home);
router.get('/login', mainController.login);
router.get('/registro', mainController.registro);
router.get('/detalle-producto', mainController.detalleproducto);
router.get('/carrito-compras', mainController.carritocompras);

//TODO: agregar el modulo
module.exports = router;