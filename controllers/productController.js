//TODO: agregar el path
const path = require('path');

//TODO: crear el mainController con el index, login, registro, carrito compras. detalle producto 
const productController = {
    detalleProducto: function(req, res){
        res.render("detalle-producto");
    },

    carritoCompras: function(req, res){
        res.render("carrito-compras");
    },
};


//TODO: agregar exportar el modulo
module.exports = productController;