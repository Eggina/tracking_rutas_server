// Se carga el modelo
var Ruta = require('../models/ruta');

// Conseguir datos de la ruta

function obtenerListaRutas(req, res) {
    Ruta.find({}, { idruta: true, nombre: true }, (err, rutas) => {
        if (err) {
            return res.status(500).send({ message: 'Error en la petición' });
        };

        var lista_rutas = [];

        if (rutas.length > 0) {
            rutas.forEach(ruta => {
                lista_rutas.push({ 'idruta': ruta.idruta, 'nombre': ruta.nombre });
            });
        }
        res.status(200).send(lista_rutas);
    });
}

function obtenerRuta(req, res) {
    Ruta.findOne({ idruta: req.params.idruta }, (err, ruta) => {
        if (err) {
            return res.status(500).send({ message: 'Error en la petición' });
        };
        if (!ruta) {
            return res.status(404).send({ message: 'La ruta no existe' });
        };
        console.log(ruta);
        return res.status(200).send({ idruta: ruta.idruta, nombre: ruta.nombre, ruta: ruta.ruta });
    });
}

function agregarRutas(req, res) {
    var rutas = req.body;
    Ruta.insertMany(rutas, (err, docs) => {
        if (err) {
            return res.status(500).send({ message: 'Error en la petición' });
        };
        if (docs) {
            return res.status(200).send({ message: `Rutas agregadas ${docs}` });
        }
    })
}

function eliminarRuta(req, res) {
    Ruta.deleteOne({ idruta: req.params.idruta }, (err) => {
        if (err) {
            return res.status(500).send({ message: 'Error en la petición' });
        };
        return res.status(200).send({ message: 'Ruta eliminada' });
    })
}

function obtenerSaludo(req, res) {
    res.status(200).send({ message: 'Hola' });
}

module.exports = {
    obtenerListaRutas,
    obtenerRuta,
    agregarRutas,
    eliminarRuta,
    obtenerSaludo
};