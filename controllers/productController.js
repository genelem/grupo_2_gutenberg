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
	create: function(req, res){
        res.render("crear-producto");
    },
	edit:function(req, res){
        res.render("editar-producto");
	}
};



//TODO: agregar exportar el modulo
module.exports = productController;