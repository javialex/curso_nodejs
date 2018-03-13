var express = require('express');
var app = express();
app.listen(3001,function () {
    console.log('Servidor corriendo...');
});

app.get('/',function (req,res) {
    res.send('Hola mundo express');
});
/**
 * A éste redireccionamiento se le llama rutas
 */
app.get('/home/:nombre',function (req,res) {
    res.send('Hola '+req.params.nombre);
});

