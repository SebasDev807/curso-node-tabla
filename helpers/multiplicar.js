const fs = require('fs');
const color = require('colors');

const { green, rainbow, red, yellow } = color;
const crearArchivo = async (base = 5, listar = false, limite) => {
    try {
        const fileName = `tabla-${base}.txt`;
        const url = `./out/${fileName}`;

        let salida = '';
        let consola = '';

        for (let i = 1; i <= limite; i++) {
            consola += `${base} x ${red(i)} = ${green(base * i)}\n`
            salida += `${base} x ${i} = ${base * i}\n`
        }

        if (listar) {
            console.log(`--->TABLA DEL ${base}<---`.rainbow.underline);
            console.log(salida);
        }

        fs.writeFileSync(url, salida);

        return `${green(fileName)} creado`;
    } catch (error) {
        throw error;
    }
}



module.exports = {
    crearArchivo
}