const fs = require("fs");
const colors = require('colors');

const crearArchivo = async(base = 5, listar, hasta) => {

    try {
        let salida, consola = "";
        salida += (colors.rainbow("-----------------------------------\n"));
        salida += (colors.rainbow(`            TABLA DEL ${base}            \n`));
        salida += (colors.rainbow("-----------------------------------\n\n"));

        for (let i=1; i<=hasta; i++){
            salida += (`${base} ${'x'.red} ${i} ${'='.red} ${base * i}\n`);
            consola += (`${base} x ${i} = ${base * i}\n`);
        }

        if(listar){
            console.log(salida);
        }

        //Escribir un archivo
        fs.writeFileSync(`./salida/tabla-${base}.txt`, consola);
        
        return(`tabla-${base}.txt`);
    }catch(err){
        
        throw err;
    }
}

module.exports = {
    crearArchivo
}