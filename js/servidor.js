var http = require("http");
var server = http.createServer(function(peticion,respuesta){
    respuesta.end("Hola Carlitos");
});
server.listen(3000,function(){
   console.log("Server funcionando..."+this.address().port);
});