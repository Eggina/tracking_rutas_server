// Módulos
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

// Express
var app = express();

// Se importan las rutas
var rutas = require('./routes/ruta');

// Peticiones json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Cross-origin resource sharing
var corsOptions = {
    origin: '*',
  };
app.use(cors(corsOptions));

// Se cargan las rutas
app.use('/api', rutas);

// Se exporta app
module.exports = app;