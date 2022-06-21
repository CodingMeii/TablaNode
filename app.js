const {crearArchivo} = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colors = require('colors');

//console.clear();

//console.log(process.argv);
//Esto se puede hacer para recibir el valor mediante la consola y las propiedades del mismo
/*const [ , , arg3 = 'base=5'] = process.argv;
const [ , base = 5] = arg3.split('=');*/
//console.log(base);

//const base = 10;

//--------yargs--------

//console.log(process.argv);
//console.log(argv);

crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(nombreArchivo => console.log(colors.green.underline(nombreArchivo, 'creado')))
    .catch(err => console.log(colors.red.underline(err)));