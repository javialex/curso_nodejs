function sumar(x, y) {
    var resultado = 0;
    console.log('FUNCION PARA LA SUMA DE DOS VALORES');
    debugger;
    console.log('VALOR DE X:' + x);
    console.log('VALOR DE Y:' + y);
    if (isNaN(x)) {
        console.log('VALOR DE X NO ADMITIDO');
        return false;
    }
    if (isNaN(y)) {
        console.log('VALOR DE Y NO ADMITIDO');
        return false;
    }
    resultado = x + y;
    return resultado;
}

module.exports = {
    sumar: sumar
}