const express = require('express')
const exphbs = require('express-handlebars')

// Inicializa o express
const app = express()

// Configurando o diretório dos partials
const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})

// Define o handlebars como template engine e executa a função exphbs.engine()
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

// Define a pasta com todos os arquivos estáticos (css, assets, images, etc...)
app.use(express.static('public'))

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

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: "Aprender Node.js",
            category: "JavaScript",
            body: "Este artigo vai te ajudar a aprender Node.js...",
            comments: 4
        },
        {
            title: "Aprender PHP",
            category: "PHP",
            body: "Este artigo vai te ajudar a aprender PHP...",
            comments: 4
        },
        {
            title: "Aprender Python",
            category: "Python",
            body: "Este artigo vai te ajudar a aprender Python...",
            comments: 4
        }
    ]

    res.render('blog', {posts})
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