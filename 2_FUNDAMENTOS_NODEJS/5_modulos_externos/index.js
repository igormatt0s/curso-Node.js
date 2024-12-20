const minimist = require("minimist");

// Terminal passa o comando node .\index.js --nome=Igor --profissao=Estudante

const args = minimist(process.argv.slice(2)); // pega o argumento nome: 'Igor'

console.log(args);

const nome = args["nome"]; // imprime somente o nome Igor
const profissao = args["profissao"];

console.log(nome);
console.log(profissao);