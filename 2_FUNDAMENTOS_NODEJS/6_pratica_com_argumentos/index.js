// Terminal passa o comando node .\index.js --a=20 --b=290

// Módulo externo
const minimist = require("minimist");

//Módulo interno
const soma = require('./soma').soma

const args = minimist(process.argv.slice(2));

console.log(args)

const a = parseInt(args["a"]);
const b = parseInt(args["b"]);

soma(a, b)