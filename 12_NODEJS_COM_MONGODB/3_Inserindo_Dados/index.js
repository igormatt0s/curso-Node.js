const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const conn = require('./db/conn').run

const productsRoutes = require('./routes/productsRoutes')

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.use('/', productsRoutes)

app.listen(3000)


