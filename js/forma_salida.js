process.on('exit',function(codigo){
   console.log("Saliendo del proceso con codigo de salida ", codigo);
});
process.exit(2);