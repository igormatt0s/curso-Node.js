const fs = require('fs');

if(!fs.existsSync('./minhaPasta')) {
    console.log("Diretório não existe!")
    fs.mkdirSync("minhaPasta")
} else {
    console.log("Existe!")
}