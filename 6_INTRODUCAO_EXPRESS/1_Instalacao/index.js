const express = require('express')
//executar o express
const app = express()
//Variável ambiente
const port = 3000

//req são os dados recebidos e res é o que a gente envia como resposta para o usuário
app.get('/', (req, res) => {
    res.send('Olá mundo!')
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})