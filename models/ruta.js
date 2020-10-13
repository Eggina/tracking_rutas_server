var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RutaSchema = new Schema({
    idruta: { 'type': "string" },
    nombre: { 'type': "string" },
    ruta: { 'type': "string" }
}, { _id: false });

module.exports = mongoose.model('Ruta', RutaSchema);