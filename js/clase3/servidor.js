var PORT = 33333;
var HOST = '127.0.0.1';
var dgram = require('dgram');
var server = dgram.createSocket('udp4');
server.on('listening', function () {
    var address = server.address();
    console.log('UPD server listening on ' + address.address + ':' + address.port);
});
server.on('message', function (message, remote) {
    console.log(remote.address + ':' + remote.port + '-' + message);
});
/**
 * Como determinar un tiempo el servidor
 */
setTimeout(function(){
    server.close();
    /*
    Se establece 8 segundos
     */
},8000);

server.bind(PORT, HOST);