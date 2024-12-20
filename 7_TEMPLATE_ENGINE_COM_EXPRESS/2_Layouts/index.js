const express = require('express')
const exphbs = require('express-handlebars')

// Inicializa o express
const app = express()

// Define o handlebars como template engine e executa a função exphbs.engine()
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// Renderiza a view home
app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, () => {
    console.log('App funcionando!')
})