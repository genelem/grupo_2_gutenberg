const express = require('express');
const app = express();

//TODO: agregar el path
const path = require('path');

//TODO: agregar la ruta
const router = require('./routers/main');

//TODO: agregar static public
app.use(express.static(path.join(__dirname, 'public'))); //consumir index

//TODO: agregar el router
app.use('/', router);

app.set('view engine', 'ejs');

app.listen(3000, ()=> console.log('Servidor funcionando'));