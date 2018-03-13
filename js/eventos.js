//Modulo Events
var eventos = require('events');
var emisor = eventos.EventEmitter;
var ee = new emisor();
ee.on('datos', function (fecha) {
    console.log(fecha)
});
setInterval(function () {
    ee.emit('datos', Date.now());
}, 500);
//Usable en control de acceso a equipos biométricos: Hacer un ping al Ip de la base de datos.