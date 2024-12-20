const express = require('express')
const exphbs = require('express-handlebars')

// Inicializa o express
const app = express()

// Define o handlebars como template engine e executa a função exphbs.engine()
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// Define a pasta com todos os arquivos estáticos (css, assets, images, etc...)
app.use(express.static('public'))

const products = [
    {
        id: "1",
        title: "Livro",
        price: 12.99
    },
    {
        id: "2",
        title: "Sofá",
        price: 200.99
    },
    {
        id: "3",
        title: "Lâmpada",
        price: 2.99
    },
]

app.get('/product/:id', (req, res) => {
    const product = products[parseInt(req.params.id) - 1]

    res.render('product', {product})
})

// Renderiza a view home
app.get('/', (req, res) => {

    res.render('home', {products})
})

app.listen(3000, () => {
    console.log('App funcionando!')
})