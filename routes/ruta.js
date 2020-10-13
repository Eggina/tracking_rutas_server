// Se carga el módulo express para poder crear rutas
var express = require('express');

// Se carga el controlador
var RutasControlador = require('../controllers/ruta');

// Router
var api = express.Router();

// Se crean las rutas para los métodos en el controlador
api.get('/', RutasControlador.obtenerSaludo)
api.get('/rutas', RutasControlador.obtenerListaRutas);
api.get('/rutas/:idruta', RutasControlador.obtenerRuta);
api.post('/rutas', RutasControlador.agregarRutas);
api.delete('/rutas/:idruta', RutasControlador.eliminarRuta);


// Se exporta la configuración
module.exports = api;