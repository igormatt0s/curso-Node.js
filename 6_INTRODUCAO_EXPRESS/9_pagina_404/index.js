const express = require('express')
//executar o express
const app = express()
//Variável ambiente
const port = 3000

const path = require('path')

const users = require('./users')

//__dirname é o diretório atual (2_render_html/) e estamos acessando a pasta templates/
const basePath = path.join(__dirname, 'templates')

// arquivos estáticos
app.use(express.static('public'))

//ler body
app.use(express.urlencoded({
    extended: true,
}),)

app.use(express.json())

app.use('/users', users)

//req são os dados recebidos e res é o que a gente envia como resposta para o usuário
app.get('/', (req, res) => {
    // envia o arquivo HTML
    res.sendFile(`${basePath}/index.html`)
})

// página 404
app.use(function(req, res, next) {
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})