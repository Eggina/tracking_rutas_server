// Módulo mongoose para conectarse a MongoDB
var mongoose = require('mongoose');

// Archivo app.hs con la configuración de Express
var app = require('./app');

// Puerto
var port = process.env.PORT || 3000;

// Ruta de la base de datos
const db_path = 'mongodb+srv://ffran:ixXrwe4YpnqYMrX@cluster0.danko.gcp.mongodb.net/rutas?retryWrites=true&w=majority';

// Configuración de la conexión de mongoose
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Conexión a la base de datos
mongoose.connect(db_path, config, error => {
    if (!error) {
        console.log('Conectado.');
        // Escucha
        app.listen(port, () => console.log(`Express corriendo en puerto ${port}`));
    } else {
        console.log('Error al conectar a la base de datos.');
    }
});