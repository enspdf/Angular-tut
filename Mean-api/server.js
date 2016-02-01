var express = require('express');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://localhost/serirestv', function (err, res) {
    if (err)
        console.log('Error conectando a la base de datos ' + err);
    else
        console.log('Conexion realizada exitosamente');
});

app.get('/', function (req, res) {
    res.send('Hola, Mundo!');
});

require('./routes')(app);

app.listen(5000);
console.log('Servidor Express escuchando en el puerto 5000');