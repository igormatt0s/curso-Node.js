const x = 10
const y = "Algum Texto"
const z = [1, 2]

console.log(x, y, z)

// Contagem de impressões
console.count(`O valor de x é ${x}, contagem`);
console.count(`O valor de x é ${x}, contagem`);
console.count(`O valor de x é ${x}, contagem`);
console.count(`O valor de x é ${x}, contagem`);

// Variáel entre string
console.log("Imagine %s Aqui!", y)

// Limpar o console
setTimeout(() => {
    console.clear();
}, 2000); // limpa o console após 2 segundos