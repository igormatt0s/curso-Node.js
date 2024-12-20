const fs = require("fs");

console.log("Inicio")

fs.writeFileSync("arquivo.txt", "oi"); // escreve no arquivo.txt a mensagem "oi"

console.log("Fim");