const express = require('express')
//executar o express
const app = express()
//Variável ambiente
const port = 3000

const path = require('path')

//__dirname é o diretório atual (2_render_html/) e estamos acessando a pasta templates/
const basePath = path.join(__dirname, 'templates')

const checkAuth = function (req, res, next) {
    req.authStatus = true

    if(req.authStatus) {
        console.log("Está logado, pode continuar")
        next()
    } else {
        console.log("Não está logado, faça o login para continuar")
        next()
    }
}

// middleware para verificar se o usuário está logado
app.use(checkAuth)

//req são os dados recebidos e res é o que a gente envia como resposta para o usuário
app.get('/', (req, res) => {
    // envia o arquivo HTML
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})