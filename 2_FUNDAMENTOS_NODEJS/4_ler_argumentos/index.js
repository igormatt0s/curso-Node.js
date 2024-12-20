// comando no terminal: node .\index.js nome=Igor idade=23

// nome

console.log(process.argv);

const args = process.argv.slice(2); // pega o que está no indice 2 (nome=Igor)

console.log(args);

const nome = args[0].split("=")[1]; //pega somente o string do nome (Igor)

console.log(nome);

const idade = args[1].split("=")[1]; //pega somente o string do idade (23)

console.log(idade);