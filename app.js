// Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')

//Inicializar variables
var app = express();

//Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//importar Rutas
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');
var loginRoutes = require('./routes/login');

//Conexion BD
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err;
    console.log('Base de Datos puerto 27017: \x1b[32m%s\x1b[0m', 'Online');
});

//Rutas la principal va al final.
app.use('/login', usuarioRoutes);
app.use('/usuario', loginRoutes);
app.use('/', appRoutes);

// Escuchar peticiones /3000=puerto 
app.listen(3000, () => {
    console.log('Express Server puerto 3000: \x1b[32m%s\x1b[0m', 'Online');
})



// COLORES CONSOLA
// Reset = "\x1b[0m"
// Bright = "\x1b[1m"
// Dim = "\x1b[2m"
// Underscore = "\x1b[4m"
// Blink = "\x1b[5m"
// Reverse = "\x1b[7m"
// Hidden = "\x1b[8m"
// FgBlack = "\x1b[30m"
// FgRed = "\x1b[31m"
// FgGreen = "\x1b[32m"
// FgYellow = "\x1b[33m"
// FgBlue = "\x1b[34m"
// FgMagenta = "\x1b[35m"
// FgCyan = "\x1b[36m"
// FgWhite = "\x1b[37m"
// BgBlack = "\x1b[40m"
// BgRed = "\x1b[41m"
// BgGreen = "\x1b[42m"
// BgYellow = "\x1b[43m"
// BgBlue = "\x1b[44m"
// BgMagenta = "\x1b[45m"
// BgCyan = "\x1b[46m"
// BgWhite = "\x1b[47m"