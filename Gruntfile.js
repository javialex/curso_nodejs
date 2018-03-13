module.exports = function (grunt){
    grunt.initConfig({
        uglify:{
            dist:{
                src:['/var/www/html/curso_nodej/js/servidor.js','/var/www/html/curso_nodej/js/tiempo_espera.js'],
                dest:'/var/www/html/curso_nodej/dist/ejemplosPrimeraClaseDosScripts.min.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
}
