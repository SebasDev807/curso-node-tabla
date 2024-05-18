const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();

const { b, l, h } = argv;

crearArchivo(b, l, h)
    .then(resultado => console.log(resultado))
    .catch(error => console.error(error));

