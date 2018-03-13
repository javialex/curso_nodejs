//Cargar Express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extend: true
}));
// GET http://localhost:8183/consulta
app.get('/consult', function (req, res, next) {
    if (req.query.filter) {
        next();
        return;
    }
    res.send('... Retorna consulta...');
});

// GET http://localhost:8183/consulta?id=100&nombre=juan
app.get('/consulta', function (req, res, next) {
    var filter = req.query.filter;
    res.send('... Retorna consulta filter ...' + filter);
});

// GET http://localhost:8183/consulta/{valor}
app.get('/consulta:id', function (req, res, next) {
    var id = req.params.id;
    res.send('... Retorna consulta GET...' + id);
});

// POST http://localhost:8183/consulta
app.post('/consulta', function (req, res) {
    var form = req.body;
    res.send('... Retorna consulta POST...' + form.nombre);
});

// POST http://localhost:8183/consulta
app.put('/consulta', function (req, res) {
    var id = req.body.id;
    var data = req.body.data;
    res.send('... Retorna consulta PUT...' + id+ ' data '+data);
});

// POST http://localhost:8183/consulta
app.delete('/consulta/:id', function (req, res) {
    var id = req.params.id;
    res.send('... Retorna consulta DELETE...' + id);
});


var server = app.listen(8183, function () {
    console.log('servicio corriendo...');
})
