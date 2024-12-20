// require forma de importar padrão e mais antiga do Nodejs
const fs = require('fs') // importa modulo File System

fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

//import {}