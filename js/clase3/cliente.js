var PORT = 33333;
var HOST = '127.0.01';

var dgram = require('dgram');
/*
    En el buffer puedo mandar igual fotos porque son datos.
 */
var message = new Buffer('Hola soy Javier ');
var message2 = new Buffer('Nos vemos....');



/*client.send(message,0,message.length,PORT,HOST,function (err,bytes) {
    if (err) throw err;
    console.log('UDP message sent to '+HOST+':'+PORT);
    client.close();
});*/
/**
 * Enviando cada 1 segundos
 */
setInterval(function () {
    var client = dgram.createSocket('udp4');
    client.send([message,message2],PORT,HOST,function (err,bytes) {
        if (err) throw err;
        console.log('UDP message sent to '+HOST+':'+PORT);
        client.close();
    });
}, 1000);

/**
 * Agregar que se cierre despues de 10 segundos
 */
/*
client.send([message,message2],PORT,HOST,function (err,bytes) {
    if (err) throw err;
    console.log('UDP message sent to '+HOST+':'+PORT);
    client.close();
});
*/