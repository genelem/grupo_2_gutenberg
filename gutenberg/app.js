const express = require('express');
const app = express();
const path = require('path');

app.listen(3030, () => console.log('Servidor en funcionamiento en el puerto 3030'));

app.use(express.static('public'));
//consumir index
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.get('/detalle-producto', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/detalle-producto.html'));
});

app.get('/carrito-compras', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/carrito-compras.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.get('/registro', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/registro.html'));
});