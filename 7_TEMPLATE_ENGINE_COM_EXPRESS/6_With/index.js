const express = require('express')
const exphbs = require('express-handlebars')

// Inicializa o express
const app = express()

// Define o handlebars como template engine e executa a função exphbs.engine()
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    const items = ["Item a", "Item b", "Item c"]

    res.render('dashboard', {items})
})

app.get('/post', (req, res) => {
    const post = {
        title: "Aprender Node.js",
        category: "JavaScript",
        body: "Este artigo vai te ajudar a aprender Node.js...",
        comments: 4
    }

    res.render('blogpost', {post})
})

// Renderiza a view home
app.get('/', (req, res) => {
    const user = {
        name: "Igor",
        surname: "Mattos",
        age: 23
    }

    const palavra = 'Handlebars'

    const auth = true

    const approved = true

    res.render('home', {user: user, palavra, auth, approved})
})

app.listen(3000, () => {
    console.log('App funcionando!')
})