const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Limite de impresiones en la tabla'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un numero.'
        }
        return true
    })

    .check((argv) => {
        if (typeof argv.l !== 'boolean') {
            throw 'El argumento debe ser booleano'
        }
        return true
    })
    .argv;

module.exports = argv;